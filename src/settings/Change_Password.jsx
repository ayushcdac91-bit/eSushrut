import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Box,
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    Divider,
} from "@mui/material";
import { useChangePasswordMutation } from "../services/Auth/ChangePassword";
import { toast } from "react-toastify";

export default function ChangePassword_Settings() {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    // Password validation
    const validatePassword = () => {
        const err = {};
        const regex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,15}$/;

        if (!oldPassword) err.oldPassword = "Old password is required";

        if (!newPassword) {
            err.newPassword = "New password is required";
        } else {
            if (!regex.test(newPassword))
                err.newPassword = "Password does not meet rules";
            if (newPassword.toLowerCase().includes("password"))
                err.newPassword = "Password should not contain word 'password'";
        }

        if (!confirmPassword)
            err.confirmPassword = "Confirm password is required";
        else if (newPassword !== confirmPassword)
            err.confirmPassword = "Passwords do not match";

        setErrors(err);
        return Object.keys(err).length === 0;
    };
    // --------------API CALL AND HANDLERS --------------
    const [changePassword, { isLoading }] = useChangePasswordMutation();
    const handleSave = async () => {
        if (!validatePassword()) return;

        try {
            const res = await changePassword({
                oldPassword,
                newPassword,
                confirmPassword,
            }).unwrap();

            //  YAHI IMPORTANT LINE
            if (res.status === "SUCCESS") {
                toast.success(res.message);
                handleClear();
            } else {
                toast.error(res.message || "Password change failed");
            }

        } catch (err) {
            toast.error(
                err?.data?.message || "Server error"
            );
        }
    };
    // --------------------------------------------------------------
    const handleClear = () => {
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
        setErrors({});
    };

    const handleCancel = () => {
    navigate(-1); 
};

    return (
        <Box sx={{ display: "flex", justifyContent: "center", mt: "160px" }}>
            <Card sx={{ width: 700, boxShadow: 4 }}>
                {/* HEADER */}
                <Box
                    sx={{
                        background: "linear-gradient(to right, #4fb3f6, #0a5ea8)",
                        p: 1.5,
                    }}
                >
                    <Typography
                        sx={{ color: "#fff", fontWeight: 600, textAlign: "center" }}
                    >
                        Change Password Details
                    </Typography>
                </Box>

                <CardContent>
                    {/* INPUTS */}
                    <Box sx={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 2 }}>
                        <Typography>*Old Password</Typography>
                        <TextField
                            type="password"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                            error={!!errors.oldPassword}
                            helperText={errors.oldPassword}
                            size="small"
                        />

                        <Typography>*New Password</Typography>
                        <TextField
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            error={!!errors.newPassword}
                            helperText={errors.newPassword}
                            size="small"
                        />

                        <Typography>*Confirm Password</Typography>
                        <TextField
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            error={!!errors.confirmPassword}
                            helperText={errors.confirmPassword}
                            size="small"
                        />
                    </Box>

                    {/* RULES */}
                    <Box sx={{ mt: 3, color: "red", fontSize: 14 }}>
                        <Typography>- The Password is case sensitive.</Typography>
                        <Typography>
                            - The Password should be minimum 8 and maximum 15 in length.
                        </Typography>
                        <Typography>
                            - The Password should contain at least one lower and one upper
                            alphabet.
                        </Typography>
                        <Typography>
                            - The Password should contain at least one digit and one special
                            character.
                        </Typography>
                        <Typography>
                            - The Password should not contain word 'password'.
                        </Typography>
                    </Box>

                    <Divider sx={{ my: 3 }} />

                    {/* BUTTONS */}
                    <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                        <Button variant="contained" onClick={handleSave}>
                            💾 Save
                        </Button>
                        <Button variant="contained" color="warning" onClick={handleClear}>
                            🧹 Clear
                        </Button>
                        <Button variant="contained" color="error" onClick={handleCancel}>
                            ❌ Cancel
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}

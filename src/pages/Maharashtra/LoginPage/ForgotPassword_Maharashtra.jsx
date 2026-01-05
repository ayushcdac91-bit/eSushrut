import React from "react";
import { useState } from "react";
import {
    Dialog,
    DialogContent,
    Box,
    Typography,
    TextField,
    Button,
    IconButton,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";
import { useThemeColor } from "../../../components/layout/ThemeColors";
import CustButton from "../../../features/exampleFeature/components/Button";
import { darken } from "@mui/material";

export default function ForgotPasswordModal({ open, onClose }) {

    const [username, setUsername] = useState("");
    const { primaryColor } = useThemeColor();
    const handleSubmit = () => {
        // forgot password API call
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="sm"
            PaperProps={{
                sx: {
                    borderRadius: { xs: 1, sm: 2 },
                    p: { xs: 1, sm: 2 },
                },
            }}
        >
            {/* -------- Close Button -------- */}
            <IconButton
                onClick={onClose}
                sx={{
                    position: "absolute",
                    right: { xs: 6, sm: 8 },
                    top: { xs: 6, sm: 8 },
                    bgcolor: "red",
                    color: "white",
                    width: { xs: 32, sm: 36 },
                    height: { xs: 32, sm: 36 },
                    "&:hover": { bgcolor: "#b30000" },
                }}
            >
                <CloseIcon fontSize="small" />
            </IconButton>

            <DialogContent
                sx={{
                    px: { xs: 1, sm: 3 },
                    py: { xs: 2, sm: 3 },
                }}
            >
                {/* -------- Header / Image -------- */}
                <Box textAlign="center" mb={{ xs: 2, sm: 3 }}>
                    <Box
                        component="img"
                        src="/images/ForgotPassword/forgot_password_icon1.png"
                        alt="Forgot Password"
                        sx={{
                            height: { xs: 90, sm: 120, md: 150 },
                            maxWidth: "100%",
                        }}
                    />
                </Box>

                {/* -------- Divider Line -------- */}
                <Box
                    sx={{
                        height: { xs: 3, sm: 5 },
                        bgcolor: primaryColor,
                        mb: { xs: 3, sm: 4 },
                    }}
                />

                {/* -------- Username Field -------- */}
                <Box display="flex" justifyContent="center">
                    <TextField
                        fullWidth
                        placeholder="Username"
                        value={username}
                        onChange={(e) =>
                            //setUsername(e.target.value)
                            setUsername(e.target.value.replace(/[^A-Za-z_]/g, ""))
                        }
                        sx={{
                            width: { xs: "100%", sm: "80%", md: "70%" },
                        }}
                        InputProps={{
                            startAdornment: (
                                <PersonIcon sx={{ mr: 1, color: primaryColor }} />
                            ),
                        }}
                    />
                </Box>

                {/* -------- Button -------- */}
                <Box textAlign="center" mt={{ xs: 3, sm: 4 }}>
                    <CustButton
                        sx={{
                            bgcolor: primaryColor,
                            "&:hover": {
                                bgcolor: darken(primaryColor, 0.2),
                            },
                        }}
                    >
                        Proceed
                    </CustButton>
                </Box>
            </DialogContent>
        </Dialog>
    );
}

import React, { useState, useEffect } from "react";
import {
    Box,
    TextField,
    Button,
    Typography,
    Paper,
    IconButton,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import MyInput from "./inputfield";
import { useTheme } from "@mui/material/styles";
import { useThemeColor } from "../../../components/layout/ThemeColors";

export default function Captchacode({ onValidate }) {
    const [captcha, setCaptcha] = useState("");
    const [userCaptcha, setUserCaptcha] = useState("");
    const [error, setError] = useState("");
    const { primaryColor } = useThemeColor();

    const generateCaptcha = () => {
        const chars =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        for (let i = 0; i < 6; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        setCaptcha(result);
        setUserCaptcha("");
        // setError("");
    };

    useEffect(() => {
        generateCaptcha();
    }, []);

    // 🔹 Login handler
    const validateCaptcha = () => {
        if (userCaptcha === captcha) {
            setError("");
            return true;
        } else {
            setError("❌ Invalid captcha");
            generateCaptcha();
            return false;
        }
    };
    // send function to parent
    useEffect(() => {
        onValidate(validateCaptcha);
    }, [captcha, userCaptcha]);
    return (
        <>
            {/* CAPTCHA DISPLAY */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt:0.5,
                    mb: 1,
                }}
            >
                <Box
                    sx={{
                        bgcolor: "#e3f2fd",
                        px: 2,
                        py: 1,
                        fontSize: "30px",
                        letterSpacing: "5px",
                        fontWeight: "bold",
                        borderRadius: 1,
                        userSelect: "none",
                        color: primaryColor
                    }}
                >
                    {captcha}
                </Box>

                <IconButton onClick={generateCaptcha}>
                    <RefreshIcon sx={{ color: primaryColor, fontSize: "30px" }} />
                </IconButton>
            </Box>

            {/* CAPTCHA INPUT */}
            <MyInput
                label="Enter Captcha"
                value={userCaptcha}
                onChange={(e) => setUserCaptcha(e.target.value)}
                margin="normal"
            />

            {error && (
                <Typography color="error" variant="body2" mt={1}>
                    {error}
                </Typography>

            )}
        </>
    )
}

import React, { useState } from "react";
import {
    Box,
    Typography,
    IconButton,
    Drawer,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { useThemeColor } from '../../../components/layout/ThemeColors';
const themeColors = [
    "#0d47a1", "#2e7d32", "#6a1b9a",
    "#d81b60", "#f4511e", "#1976d2",
    "#7b1fa2", "#0b3c5d", "#ff6f00",
    "#37474f", "#556b2f", "#8b0000",
];
export default function Settingicon() {
    const { primaryColor, setPrimaryColor } = useThemeColor();
    const [openTheme, setOpenTheme] = useState(false);
    return (
        <>
            <IconButton
                onClick={() => setOpenTheme(true)}
                sx={{
                    position: "fixed",
                    top: '10%',
                    right: 20,
                    color: primaryColor,
                    bgcolor: "#fff",
                    animation: "spin 2s linear infinite",
                    "@keyframes spin": {
                        from: { transform: "rotate(0deg)" },
                        to: { transform: "rotate(360deg)" },
                    },
                }}
            >
                <SettingsIcon />
            </IconButton>

            {/*  THEME DRAWER */}
            <Drawer anchor="right" open={openTheme} onClose={() => setOpenTheme(false)}
                PaperProps={{
                    sx: {
                        height: "fit-content",
                        mt: 20,
                        borderRadius: "12px 0 0 12px",
                    },
                }}
            >
                <Box sx={{ width: 160, p: 2, }}>

                    <Typography variant="h6" textAlign="center">
                        Theme Colors
                    </Typography>

                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: 2,
                            mt: 2,
                        }}
                    >
                        {themeColors.map((color) => (
                            <Box
                                key={color}
                                onClick={() => setPrimaryColor(color)}
                                sx={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: "50%",
                                    bgcolor: color,
                                    cursor: "pointer",
                                    border:
                                        primaryColor === color
                                            ? "3px solid black"
                                            : "2px solid #fff",
                                }}
                            />
                        ))}
                    </Box>

                </Box>
            </Drawer>
        </>
    )
}

import React from "react";
import { Box, Typography } from "@mui/material";

export default function Contact_HP() {
    return (
        <Box
            id="contact"
            sx={{
                mt: { xs: "80px", md: "200px" },
                mb: { xs: "80px" },
            }}
        >
            <Box
                sx={{
                    width: { xs: "90%", sm: "85%", md: "80%" },
                    mx: "auto",
                    background: "#ffffff",
                    p: { xs: "12px", sm: "15px" },
                    display: "flex",
                    justifyContent: { xs: "center", md: "space-between" },
                    alignItems: "center",
                    gap: "15px",
                    flexDirection: { xs: "column", md: "row" },
                    borderRadius: "8px",
                    boxShadow: "0px 0px 15px rgba(0,0,0,0.2)",
                    fontFamily: "Arial, sans-serif",
                    textAlign: { xs: "center", md: "left" },
                }}
            >
                {/* ------------ LEFT SECTION ------------ */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        flexWrap: "wrap",
                        justifyContent: { xs: "center", md: "flex-start" },
                    }}
                >
                    <Box
                        component="img"
                        src="/images/Contact_Himachal/NHMHP_logo.png"
                        alt="Logo"
                        sx={{
                            width: { xs: "45px", sm: "50px" },
                            height: "auto",
                        }}
                    />

                    <Typography
                        sx={{
                            fontSize: { xs: "16px", sm: "18px" },
                            fontWeight: 600,
                            color: "#333",
                            maxWidth: { xs: "250px", md: "none" },
                        }}
                    >
                        National Health Mission – Himachal Pradesh
                    </Typography>
                </Box>

                {/* ------------ RIGHT SECTION ------------ */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        flexWrap: "wrap",
                        justifyContent: { xs: "center", md: "flex-start" },
                        mt: { xs: "5px", md: "0" },
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: "18px", sm: "20px" },
                            color: "#0a798e",
                            fontWeight: "bold",
                        }}
                    >
                        ✉
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: { xs: "14px", sm: "15px" },
                            color: "#086b7c",
                        }}
                    >
                        Email Us: spohealthnhmhp[AT]gmail[DOT]com
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

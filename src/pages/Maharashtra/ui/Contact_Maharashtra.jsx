import React from "react";
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import { useThemeColor } from "../../../components/layout/ThemeColors";

export default function Contact_Mah() {
    const { primaryColor } = useThemeColor();
    return (
        <Box id='contact' sx={{ background: "#f5f5f5", py: 6 }}>
            <Grid container spacing={4} justifyContent="center">

                {/* CONTACT CARD */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{
                        height: "100%", Width: "100%", boxShadow: 3,
                        transition: "all 0.3s ease",
                        "&:hover": {
                            boxShadow: `0 8px 35px ${primaryColor}`,
                            transform: "translateY(-4px)",
                        },
                    }}>
                        <CardContent sx={{ textAlign: "center", py: 5 }}>
                            <PersonIcon sx={{ fontSize: 40, color: primaryColor, mb: 1 }} />
                            <Typography variant="h6" fontWeight={600}>
                                Contact
                            </Typography>

                            <Typography sx={{ mt: 2 }}>
                                Dr. Prashant Uikey
                            </Typography>
                            <Typography variant="body2">
                                Asst. Director Hospital Cell, Mumbai
                            </Typography>

                            <Typography sx={{ mt: 2 }}>
                                <b>Phone:</b> +91-7588491464
                            </Typography>
                            <Typography>
                                <b>Email:</b> hospitalmis1[AT]gmail[DOT]com
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* ADDRESS CARD */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{
                        height: "100%", Width: "100%", boxShadow: 3,
                        transition: "all 0.3s ease",
                        "&:hover": {
                            boxShadow: `0 8px 35px ${primaryColor}`,
                            transform: "translateY(-4px)",
                        },
                    }}>
                        <CardContent sx={{ textAlign: "center", py: 5 }}>
                            <LocationOnIcon sx={{ fontSize: 40, color: primaryColor, mb: 1 }} />
                            <Typography variant="h6" fontWeight={600}>
                                Address
                            </Typography>

                            <Typography sx={{ mt: 2 }}>
                                Public Health Department
                            </Typography>
                            <Typography>Arogya Bhavan</Typography>
                            <Typography>St. George's Hospital Compound</Typography>
                            <Typography>P. D'Mello Road</Typography>
                            <Typography>Mumbai - 400001</Typography>
                            <Typography>MAHARASHTRA, INDIA</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* EMAIL / CALL CARD */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{
                        height: "100%", Width: "100%", boxShadow: 3,
                        transition: "all 0.3s ease",
                        "&:hover": {
                            boxShadow: `0 8px 35px ${primaryColor}`,
                            transform: "translateY(-4px)",
                        },
                    }}>
                        <CardContent sx={{ textAlign: "center", py: 5 }}>
                            <EmailIcon sx={{ fontSize: 40, color: primaryColor, mb: 1 }} />
                            <Typography variant="h6" fontWeight={600}>
                                Email Us
                            </Typography>

                            <Typography sx={{ mt: 2 }}>
                                hmis[DOT]projectincharge[AT]gmail[DOT]com
                            </Typography>
                            <Typography>
                                hmis[DOT]pmucell[AT]gmail[DOT]com
                            </Typography>

                            <CallIcon sx={{ fontSize: 35, color: primaryColor, mt: 3 }} />
                            <Typography variant="h6" sx={{ mt: 1 }}>
                                Call Us
                            </Typography>
                            <Typography>9821540241</Typography>
                            <Typography>8999292016</Typography>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
        </Box>
    );
}

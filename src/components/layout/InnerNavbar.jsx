import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import '../../pages/Maharashtra/LoginPage/Login_Maharashtra';
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    IconButton,
    Button,
    Drawer,
    List,
    ListItemButton,
    ListItemText,
    useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SettingsIcon from "@mui/icons-material/Settings";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

export default function InnerNavbar() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [drawerOpen, setDrawerOpen] = useState(false);

    const navigate = useNavigate();

    const menuItems = [
        "Registration",
        "Emergency",
        "O P D",
        "A D T",
        "Investigation",
        "Billing",
        "Enquiry",
        "Admin",
        "Operation Theater",
        "I P D",
        "Laundry",
        "Inventory",
        "M R D",
        "Diet Kitchen",
        "Global"
    ];

    // ----------------For Active Menu-------------
    const location = useLocation();

    const getActiveMenu = () => {
        const path = location.pathname;

        if (path === "/Home_Reg") return "Registration";
        if (path === "/Home_Emy") return "Emergency";
        if (path === "/Home_OPD") return "O P D";
        if (path === "/Home_ADT") return "A D T";
        if (path === "/Home_Invt") return "Investigation";
        if (path === "/Home_Bill") return "Billing";
        if (path === "/Home_Enquiry") return "Enquiry";
        if (path === "/Home_Admin") return "Admin";
        if (path === "/Home_OT") return "Operation Theater";
        if (path === "/Home_IPD") return "I P D";
        if (path === "/Home_Laundry") return "Laundry";
        if (path === "/Home_Inventory") return "Inventory";
        if (path === "/Home_MRD") return "M R D";
        if (path === "/Home_DietKitchen") return "Diet Kitchen";
        if (path === "/Home_Global") return "Global";

        return "";
    };

    const activeMenu = getActiveMenu();

    // ---------------For Logout Power Button----------

    const handleLogout = () => {
    if (!window.confirm("Are you sure you want to logout?")) return;

    localStorage.clear();
    sessionStorage.clear();

    navigate("/", { replace: true });
    };

    //---------------------------------------------------

    return (
        <Box position='fixed' width="100%" right="0" top="0" zIndex={1000}>
            {/* ---------TOP BAR ----------*/}
            <AppBar position="static" sx={{ background: "linear-gradient(to right, #49B2F3, #02629C)" }}>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                    {/*---------- Logo------------ */}
                    <Box
                        component="img"
                        src="/images/Logo/e-sushrut.png"
                        alt="logo"
                        sx={{ height: 40, mr: 2 }}
                    />

                    {/*-------- Hospital Name ------*/}
                    {!isMobile && (
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, fontSize: 24 }}>
                            Indira Gandhi Medical College and Hospital
                        </Typography>
                    )}

                    {/* --Right-side (User + Settings + Logout) --*/}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        {!isMobile && (
                            <Typography variant="h6" fontWeight="600" color="#ffa654">
                                Welcome, Admin
                            </Typography>
                        )}

                        {isMobile ? (
                            <IconButton sx={{ color: "white" }} onClick={() => setDrawerOpen(true)}>
                                <MenuIcon />
                            </IconButton>
                        ) : (
                            <>
                                <IconButton sx={{ color: "white" }}>
                                    <SettingsIcon />
                                </IconButton>
                                <IconButton sx={{ color: "white" }} onClick={handleLogout}>
                                    <PowerSettingsNewIcon />
                                </IconButton>
                            </>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>

            {/*---------- DESKTOP MENU BAR--------- */}
            {!isMobile && (
                <Box
                    sx={{
                        display: "flex",
                        background: "linear-gradient(to right, #49B2F3, #02629C)",
                        overflowX: "auto",
                        gap: 1,
                        px: 1,
                    }}
                >
                    {menuItems.map((item, index) => (
                        <Button
                            key={index}
                            onClick={() => {
                                if (item === "Registration") navigate("/Home_Reg");
                                else if (item === "Emergency") navigate("/Home_Emy");
                                else if (item === "O P D") navigate("/Home_OPD");
                                else if (item === "A D T") navigate("/Home_ADT");
                                else if (item === "Investigation") navigate("/Home_Invt");
                                else if (item === "Billing") navigate("/Home_Bill");
                                else if (item === "Enquiry") navigate("/Home_Enquiry");
                                else if (item === "Admin") navigate("/Home_Admin");
                                else if (item === "Operation Theater") navigate("/Home_OT");
                                else if (item === "I P D") navigate("/Home_IPD");
                                else if (item === "Laundry") navigate("/Home_Laundry");
                                else if (item === "Inventory") navigate("/Home_Inventory");
                                else if (item === "M R D") navigate("/Home_MRD");
                                else if (item === "Diet Kitchen") navigate("/Home_DietKitchen");
                                else if (item === "Global") navigate("/Home_Global");
                            }}
                            sx={{
                                color: "white",
                                textTransform: "none",
                                fontWeight: 600,
                                background:
                                    activeMenu === item
                                        ? "rgba(255,255,255,0.25)"
                                        : "transparent",
                                borderRadius: "4px",
                                whiteSpace: "nowrap",
                            }}
                        >
                            {item}
                        </Button>
                    ))}
                </Box>
            )}

            {/*----------- MOBILE DRAWER--------- */}
            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <Box sx={{ mt: 1, borderBottom: "1px solid #ccc" }}>
                    <Box sx={{ display: "flex", justifyContent: "flex-end", m: 1 }}>
                        <IconButton
                            onClick={() => setDrawerOpen(false)}
                            sx={{ background: "linear-gradient(red, transparent)", display: "flex", p: 1 }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Typography variant="h6" fontWeight="600" color="#ffa654">
                        Welcome, Admin
                    </Typography>
                    <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
                        <IconButton>
                            <SettingsIcon />
                        </IconButton>
                        <IconButton onClick={handleLogout}>
                            <PowerSettingsNewIcon />
                        </IconButton>
                    </Box>
                </Box>
                <Box sx={{ width: 260, p: 2 }}>
                    <Typography variant="h6" fontWeight="600" sx={{ mb: 2, borderBottom: "1px solid #ccc", color: '#02629C' }}>
                        Indira Gandhi Medical College and Hospital
                    </Typography>

                    <List>
                        {menuItems.map((item, index) => (
                            <ListItemButton
                                key={index}
                                onClick={() => {
                                    getActiveMenu(item);
                                    setDrawerOpen(false);
                                }}
                            >
                                <ListItemText primary={item} />
                            </ListItemButton>
                        ))}
                    </List>


                </Box>
            </Drawer>
        </Box>
    );
}

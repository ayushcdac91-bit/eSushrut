import React, { useState, useEffect } from "react";
import { Tabs, Tab, Box, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useNavigate, useLocation } from "react-router-dom";
import InnerNavbar from "./InnerNavbar";
import { routeTitles } from "../../utils/routesConfig";

export default function Opentabs({ setRefreshKey }) {

    const navigate = useNavigate();
    const location = useLocation();

    //  TAB STATE (label + path added)
    const [tabs, setTabs] = useState([
        { id: 1, label: "Home Menu", path: "/Home_Reg" },
    ]);

    const [activeTab, setActiveTab] = useState(1);

    //  ROUTE CHANGE → TAB AUTO ADD / ACTIVATE
    useEffect(() => {
        const currentPath = location.pathname;
        const route = routeTitles[currentPath];

        // HOME MENU CASE
        if (route?.type === "HOME") {
            const homeTab = tabs.find(tab => tab.id === 1);

            if (!homeTab) {
                setTabs([{ id: 1, label: "Home Menu", path: currentPath }]);
            } else {
                setTabs(prev =>
                    prev.map(tab =>
                        tab.id === 1 ? { ...tab, path: currentPath } : tab
                    )
                );
            }

            setActiveTab(1);
            return;
        }

        // NORMAL PAGE CASE
        const existingTab = tabs.find(tab => tab.path === currentPath);

        if (existingTab) {
            setActiveTab(existingTab.id);
        } else {
            const newTab = {
                id: Date.now(),
                label: route?.title || "New Tab",
                path: currentPath,
            };

            setTabs(prev => [...prev, newTab]);
            setActiveTab(newTab.id);
        }

    }, [location.pathname]);

    // TAB CLICK → ROUTE CHANGE
    const handleChange = (event, newValue) => {
        const tab = tabs.find(t => t.id === newValue);
        setActiveTab(newValue);
        navigate(tab.path);
    };

    // CLOSE TAB
    const handleClose = (id) => {
        const updatedTabs = tabs.filter(t => t.id !== id);
        setTabs(updatedTabs);

        if (activeTab === id && updatedTabs.length > 0) {
            navigate(updatedTabs[updatedTabs.length - 1].path);
        }
    };

    // REFRESH BUTTON
    const handleRefresh = () => {
        setRefreshKey(prev => prev + 1);
    };

    return (
        <Box>
            <InnerNavbar />

            <Box
                sx={{
                    width: "100%",
                    borderBottom: "1px solid #1db5c9ff",
                    display: "flex",
                    alignItems: "center",
                    background: "#edeeeeff",
                    position: "fixed",
                    right: 0,
                    top: { xs: 50, sm: 65, md: 100 },
                    zIndex: 1000,
                }}
            >
                <Tabs
                    value={activeTab}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    TabIndicatorProps={{ style: { display: "none" } }}
                    sx={{
                        flexGrow: 1,
                        minHeight: 0,

                        "& .MuiTab-root": {
                            textTransform: "none",
                            border: "1px solid #1db5c9",
                            marginRight: "3px",
                            mt: "2px",
                            borderRadius: "25px 12px 0 0",
                            background: "#edeeeeff",
                            color: "#0E2D5F",
                            minHeight: "28px",
                            padding: "0px 12px",
                            gap: 1,
                        },

                        "& .Mui-selected": {
                            background:
                                "linear-gradient(to bottom, #F2BC34 0, #ffffff 100%)",
                            color: "#0E2D5F",
                        },
                    }}
                >
                    {tabs.map((tab) => (
                        <Tab
                            key={tab.id}
                            value={tab.id}
                            label={
                                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                    <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
                                        {tab.label}
                                    </Typography>

                                    {tab.id !== 1 && (
                                        <IconButton
                                            component="div"
                                            size="small"
                                            sx={{ p: 0, m: 0 }}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleClose(tab.id);
                                            }}
                                        >
                                            <CloseIcon sx={{ fontSize: 15 }} />
                                        </IconButton>
                                    )}
                                </Box>
                            }
                        />
                    ))}
                </Tabs>

                <IconButton
                    onClick={handleRefresh}
                    sx={{ color: "#02b7c9", ml: 1, mr: 1, p: 0 }}
                >
                    <RefreshIcon sx={{ fontSize: 24 }} />
                </IconButton>
            </Box>
        </Box>
    );
}

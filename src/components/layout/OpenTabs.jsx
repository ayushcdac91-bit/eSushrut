import React, { useState } from "react";
import { Tabs, Tab, Box, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import RefreshIcon from "@mui/icons-material/Refresh";
import InnerNavbar from "./InnerNavbar";


export default function Opentabs() {

    const [tabs, setTabs] = useState([
        { id: 1, label: "Home Menu" },
        { id: 2, label: "Patient Registration" },
        { id: 3, label: "Patient Detail Modification" },
    ]);

    const [activeTab, setActiveTab] = useState(1);

    const handleChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    const handleClose = (id) => {
        const updatedTabs = tabs.filter((t) => t.id !== id);
        setTabs(updatedTabs);

        if (activeTab === id && updatedTabs.length > 0) {
            setActiveTab(updatedTabs[0].id);
        }
    };

    const handleRefresh = () => {
        console.log("Refreshing:", activeTab);
    };

    return (
        <Box>
            <InnerNavbar></InnerNavbar>
            <Box
                sx={{
                    width: "100%",
                    borderBottom: "1px solid #1db5c9ff",
                    display: "flex",
                    alignItems: "center",
                    background: "#edeeeeff",
                    position: 'fixed',
                    width: '100%',
                    right: 0,
                    top: {xs:50, sm:65, md:100},
                    zIndex:1000,
                }}
            >
                {/* TABS */}
                <Tabs
                    value={activeTab}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    TabIndicatorProps={{ style: { display: "none" } }}
                    sx={{
                        flexGrow: 1,
                        padding: 0,
                        minHeight: 0,

                        "& .MuiTabs-flexContainer": {
                            minHeight: 0,
                        },

                        "& .MuiTab-root": {
                            textTransform: "none",
                            border: "1px solid #1db5c9",
                            marginRight: "3px",
                            mt: "2px",
                            borderRadius: "25px 12px 0 0",
                            background: "#edeeeeff",
                            color: "#0E2D5F",
                            minHeight: "28px",
                            lineHeight: "15px",
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

                                    {/* Close icon FIX (component="div") */}
                                    {tab.id !== 1 && (
                                        <IconButton
                                            component="div"     // ⭐ FIXED: Now it's <div>, not <button>
                                            size="small"
                                            sx={{ p: 0, m: 0 }}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleClose(tab.id);
                                            }}
                                        >
                                            <CloseIcon sx={{ fontSize: 15, color: "#0E2D5F" }} />
                                        </IconButton>
                                    )}
                                </Box>
                            }
                        />
                    ))}
                </Tabs>

                {/* REFRESH BUTTON */}
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

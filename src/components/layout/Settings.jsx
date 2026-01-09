import React from "react";
import {
    Menu,
    MenuItem,
    IconButton,
    Typography,
    Box,
    Divider,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";

export default function SettingsMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleNavigate = (path) => {
        navigate(path);
        handleClose();
    };

    return (
        <Box>
            {/* Settings Icon */}
            <IconButton onClick={handleClick}>
                <SettingsIcon sx={{ color: "#bdbeb0ff" }} />
            </IconButton>

            {/* Dropdown Menu */}
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    sx: {
                        width: 220,
                        backgroundColor: "#d3d3d3",
                        color: "#033886ff",
                        borderRadius: 1,
                    },
                }}
            >
                <Box sx={{ px: 2, py: 1 }}>
                    <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 600, color: '#313131ff' }}
                    >
                        Settings
                    </Typography>
                </Box>

                <Divider />
                <MenuItem onClick={() => handleNavigate("/change-password")}>
                    Change Password
                </MenuItem>

                <MenuItem onClick={() => handleNavigate("/change-user-details")}>
                    Change User Details
                </MenuItem>

                <MenuItem onClick={() => handleNavigate("/user-log-report")}>
                    User Log Report
                </MenuItem>

                <MenuItem onClick={() => handleNavigate("/home")}>
                    Home
                </MenuItem>
            </Menu>
        </Box>
    );
}

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";

export default function navbar_HP() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState(false);

  const menuItems = [
    { label: "ABOUT", id: "about" },
    { label: "FEATURES", id: "features" },
    { label: "GALLERY", id: "gallery" },
    { label: "CONTACT", id: "contact" },
    { label: "APPOINTMENT", id: "appointment" },
    { label: "LOGIN", id: "login" },
    { label: "DASHBOARD", id: "dashboard" },
  ];

  // -------------- Smooth Scroll Function---------------
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    setOpenDrawer(false); // Close drawer on mobile
  };

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#157e84", zIndex:1200 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

          {/*-------------- Logo ------------------*/}
          <Box
            component="img"
            src="/images/Logo/e-sushrut.png"
            alt="logo"
            sx={{ height: 40, mr: 2 }}
          />

          {/*-------------- Center Title -------------*/}
          {!isMobile && (
            <Typography
              textAlign="center"
              sx={{ fontWeight: 600, fontSize: 20 }}
            >
              Hospital Management and Information System <br />
              State Wide Implementation
            </Typography>
          )}

          {/*------------------- Desktop Menu-------------- */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 3 }}>
              {menuItems.map((item) =>
                item.id === "dashboard" ? (
                  <Typography key={item.label} sx={{ cursor: "pointer", fontSize: 14 }}>
                    <a
                      href="dashboard"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {item.label}
                    </a>
                  </Typography>
                ) : (
                  <Typography
                    key={item.label}
                    sx={{ cursor: "pointer", fontSize: 14 }}
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </Typography>
                )
              )}
            </Box>
          )}

          {/*--------------- Mobile Hamburger-------------- */}
          {isMobile && (
            <IconButton
              edge="end"
              onClick={() => setOpenDrawer(true)}
              sx={{ color: "white" }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/*---------------- Mobile Drawer-------------- */}
      <Drawer anchor="right" open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <Box sx={{ width: 250 }}>

          {/* --------------Drawer Header ------------*/}
          <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
            <IconButton
              onClick={() => setOpenDrawer(false)}
              sx={{ background: "linear-gradient(red, transparent)" }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/*------------ Drawer Content --------------*/}
          <List>
            {/*Mobile Title */}
            <Typography
              sx={{
                fontWeight: "bold",
                px: 2,
                mb: 2,
                fontSize: 15,
                color: "#157e84",
                textAlign: "center"
              }}
            >
              Hospital Management and Information System <br />
              State Wide Implementation
            </Typography>

            {menuItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                {item.id === "dashboard" ? (
                  <ListItemButton
                    component="a"
                    href="/dashboard"       
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                ) : (
                  <ListItemButton onClick={() => scrollToSection(item.id)}>
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                )}
              </ListItem>

            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

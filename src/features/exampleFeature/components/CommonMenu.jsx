import React from "react";
import {
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const CommonMenuPage = ({ menuConfig, modules }) => {
  return (
    <Box sx={{ p: 4, mt:"120px"}}>
      <Grid container spacing={25}>
        {modules.map((moduleKey) => {
          const module = menuConfig[moduleKey];
          if (!module) return null;

          return (
            <Grid item xs={12} md={4} key={moduleKey}>
              {/* HEADER */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  mb: 2,
                }}
              >
                {/* IMAGE */}
                <Box
                  component="img"
                  src={module.icon}
                  alt={module.title}
                  sx={{ width: 70, height: 70 }}
                />

                {/* TITLE */}
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 500,
                    letterSpacing: 5,
                    fontSize: 34,
                    textShadow: `
                      1px 0px 1px #ccc,
                      0px 1px 1px #eee,
                      2px 1px 1px #ccc,
                      1px 2px 1px #eee,
                      3px 2px 1px #ccc,
                      2px 3px 1px #eee,
                      4px 3px 1px #ccc,
                      3px 4px 1px #eee,
                      5px 4px 1px #ccc,
                      4px 5px 1px #eee,
                      6px 5px 1px #ccc,
                      5px 6px 1px #eee,
                      7px 6px 1px #ccc
                    `,
                  }}
                >
                  {module.title}
                </Typography>
              </Box>

              {/* ITEMS */}
              <List dense>
                {module.items.map((item, index) => (
                  <ListItem key={index} sx={{ py: 0 }}>
                    <ListItemIcon sx={{ minWidth: 30 }}>
                      <Box
                        component="img"
                        src="/images/Icons/leaf-green.png"
                        alt="icon"
                        sx={{ width: 18, height: 18 }}
                      />
                    </ListItemIcon>

                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{
                        sx: {
                          fontSize: 16,
                          color: "#337ab7",
                          lineHeight: 1,
                          cursor: "pointer",
                          transition: "all 0.2s ease",
                          "&:hover": {
                            color: "#0d47a1",
                            textDecoration: "underline",
                          },
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default CommonMenuPage;

import React from "react";
import { Box, Modal, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function CustomModal({
  open,
  onClose,
  title,
  children,
  color,
  width = { xs: "90%", sm: "80%", md: "50%" }
}) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 1, // small padding so modal doesn't touch edges on mobile
      }}
    >
      <Box
        sx={{
          width: width,
          bgcolor: "white",
          p: { xs: 2, sm: 3, md: 4 },
          borderRadius: 2,
          outline: "none",
          position: "relative",
          maxHeight: "90vh",      
          overflowY: "auto",      
          boxShadow: 6,
        }}
      >
        {/*--------- Close Button (Top Right)--------- */}
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            bgcolor: "red",
            color: "white",
            "&:hover": { bgcolor: "#b30000" },
            width: 36,
            height: 36,
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>

        {/*------- Modal Title-------- */}
        {title && (
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: 2,
              textAlign: "center",
              color: color,
            }}
          >
            {title}
          </Typography>
        )}

        {/*-------- Modal Content------- */}
        <Box sx={{ textAlign: "center" }}>{children}</Box>
      </Box>
    </Modal>
  );
}

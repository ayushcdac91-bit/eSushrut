import React from "react";
import {
  Dialog,
  DialogContent,
  IconButton,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function ForgotPassModal({
  open,
  onClose,
  maxWidth = "md",
  children,
}) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          p: { xs: 2, md: 4 },
        },
      }}
    >
      {/* ---------Close Button--------- */}
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          right: 10,
          top: 10,
          color: "red",
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent>
        <Box
         onClick={(e) => e.stopPropagation()}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 1,
          }}
        >
          {/*-----------COMMON LEFT IMAGE------------ */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src="/images/ForgotPassword/passwordlock.png"
              alt="auth"
              sx={{
                height: { xs: 180, md: 260 },
                opacity: 0.9,
              }}
            />
          </Box>

          {/*---------DYNAMIC RIGHT CONTENT------------ */}
          <Box sx={{ flex: 1, width: "100%" }}>
            {children}
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

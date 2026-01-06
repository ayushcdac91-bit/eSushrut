import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { keyframes } from "@mui/system";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import WarningIcon from "@mui/icons-material/Warning";
import InfoIcon from "@mui/icons-material/Info";

/* Success animation */
const successAnim = keyframes`
  0% { transform: scale(0.5) rotate(-180deg); opacity: 0; }
  60% { transform: scale(1.2) rotate(10deg); opacity: 1; }
  100% { transform: scale(1) rotate(0deg); }
`;

const iconStyles = {
  success: {
    icon: CheckCircleIcon,
    color: "#18ce36ff",
    animation: `${successAnim} 0.6s ease-out`,
  },
  error: {
    icon: ErrorIcon,
    color: "#e93737ff",
  },
  warning: {
    icon: WarningIcon,
    color: "#ed6c02",
  },
  info: {
    icon: InfoIcon,
    color: "#0288d1ff",
  },
};

export default function MessagePopup({
  open,
  onClose,
  title = "Message",
  message = "",
  type = "info",
  buttonText = "OK",
}) {
  const Icon = iconStyles[type].icon;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          textAlign: "center",
          p: 1,
        },
      }}
    >
      {/* ICON */}
      <Box sx={{ mt: 3 }}>
        <Icon
          sx={{
            fontSize: 70,
            color: iconStyles[type].color,
            animation: iconStyles[type].animation,
          }}
        />
      </Box>

      {/* TITLE */}
      <DialogTitle
        sx={{
          fontWeight: "bold",
          fontSize: 20,
          color: iconStyles[type].color,
          mt: 1,
        }}
      >
        {title}
      </DialogTitle>

      {/* MESSAGE */}
      <DialogContent>
        <Typography fontSize={15} color="text.secondary">
          {message}
        </Typography>
      </DialogContent>

      {/* ACTION */}
      <DialogActions sx={{ justifyContent: "center", pb: 3 }}>
        <Button
          variant="contained"
          onClick={onClose}
          sx={{
            px: 4,
            borderRadius: 5,
            bgcolor: iconStyles[type].color,
            "&:hover": {
              bgcolor: iconStyles[type].color,
            },
          }}
        >
          {buttonText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

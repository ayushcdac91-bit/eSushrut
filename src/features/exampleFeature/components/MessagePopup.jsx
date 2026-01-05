import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import WarningIcon from "@mui/icons-material/Warning";
import InfoIcon from "@mui/icons-material/Info";

const iconMap = {
  success: <CheckCircleIcon sx={{ color: "#2e7d32", fontSize: 40 }} />,
  error: <ErrorIcon sx={{ color: "#d32f2f", fontSize: 40 }} />,
  warning: <WarningIcon sx={{ color: "#ed6c02", fontSize: 40 }} />,
  info: <InfoIcon sx={{ color: "#0288d1", fontSize: 40 }} />,
};

export default function MessagePopup({
  open,
  onClose,
  title = "Message",
  message = "",
  type = "info", // success | error | warning | info
  buttonText = "OK",
}) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle
        sx={{ display: "flex", alignItems: "center", gap: 1 }}
      >
        {iconMap[type]}
        {title}
      </DialogTitle>

      <DialogContent>
        <Typography fontSize={15}>{message}</Typography>
      </DialogContent>

      <DialogActions>
        <Button
          variant="contained"
          onClick={onClose}
          sx={{
            bgcolor:
              type === "success"
                ? "#2e7d32"
                : type === "error"
                ? "#d32f2f"
                : type === "warning"
                ? "#ed6c02"
                : "#0288d1",
          }}
        >
          {buttonText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

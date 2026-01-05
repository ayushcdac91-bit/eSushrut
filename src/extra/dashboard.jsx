import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");

  const handleSubmit = () => {
    console.log("Username:", username);
    // 👉 yahan forgot password API call karega
  };

  return (
    <>
      {/* Open Modal Button */}
      <Typography
        onClick={() => setOpen(true)}
        sx={{
          cursor: "pointer",
          color: "#1976d2",
          fontSize: 14,
        }}
      >
        Forgot Password?
      </Typography>

      {/* Modal */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 2,
            p: 2,
          },
        }}
      >
        {/* Close Icon */}
        <IconButton
          onClick={() => setOpen(false)}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent>
          {/* Header */}
          <Box textAlign="center" mb={2}>
            <Box
              component="img"
              src="/images/forgot-password.png"
              alt="Forgot Password"
              sx={{ height: 80, mb: 1 }}
            />
          </Box>

          {/* Blue Line */}
          <Box
            sx={{
              height: "5px",
              backgroundColor: "#1976d2",
              width: "100%",
              mb: 4,
            }}
          />

          {/* Username */}
          <Box display="flex" justifyContent="center">
            <TextField
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{ width: "70%" }}
              InputProps={{
                startAdornment: (
                  <PersonIcon sx={{ mr: 1, color: "" }} />
                ),
              }}
            />
          </Box>

          {/* Button */}
          <Box textAlign="center" mt={4}>
            <Button
              variant="contained"
              size="large"
              onClick={handleSubmit}
              sx={{
                px: 5,
                textTransform: "none",
                borderRadius: 1,
              }}
            >
              Proceed
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}

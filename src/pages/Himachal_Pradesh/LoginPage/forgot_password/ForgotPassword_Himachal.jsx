import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ForgotPassModal from "../../../../features/exampleFeature/components/ForgotPasswordModal";

export default function ForgotPasswordModal({
  open,
  onClose,
  onProceed,
  loading,
}) {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleProceed = () => {
    if (!username.trim()) {
      setError("Username is required");
      return;
    }
    setError("");
    onProceed(username);
  };

  return (
    <ForgotPassModal open={open} onClose={onClose}>
      <Box
        sx={{
          bgcolor: "#009688",
          borderRadius: 2,
          p: { xs: 3, md: 4 },
          color: "white",
        }}
      >
        <Typography variant="h5" fontWeight="bold" mb={1} textAlign="center">
          Forgot Password?
        </Typography>

        <Typography fontSize={14} mb={3}>
          Enter the Username associated with your account
        </Typography>

        <TextField
          fullWidth
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value.replace(/[^A-Za-z_]/g, ""))}
          error={Boolean(error)}
          helperText={error}
          sx={{ bgcolor: "white", borderRadius: 1, mb: 3 }}
          InputProps={{
            startAdornment: (
              <PersonIcon sx={{ mr: 1, color: "#009688" }} />
            ),
          }}
        />

        <Button
          fullWidth
          size="large"
          disabled={loading}
          onClick={loading ? undefined : handleProceed}
          sx={{
            bgcolor: "red",
            color: "white",
            fontWeight: "bold",
            "&:hover": { bgcolor: "#b30000" },
          }}
        >
          {loading ? (
            <CircularProgress size={22} sx={{ color: "white" }} />
          ) : (
            "Proceed"
          )}
        </Button>
      </Box>
    </ForgotPassModal>
  );
}

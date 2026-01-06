import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ForgotPassModal from "../../../../features/exampleFeature/components/ForgotPasswordModal";

export default function NewPasswordModal({
  open,
  onClose,
  onSave,
  loading,
}) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const isMatch =
    password.length > 0 &&
    confirmPassword.length > 0 &&
    password === confirmPassword;

  const handleSave = () => {
    if (!isMatch) return;
    onSave(password);
  };

  return (
    <ForgotPassModal open={open} onClose={onClose}>
      <Box
        sx={{
          bgcolor: "#009688",
          borderRadius: 2,
          p: { xs: 3, md: 4 },
          color: "white",
          maxWidth: '100%',
          mx: "auto",
        }}
      >
        {/* SUCCESS MESSAGE */}
        <Typography
          fontSize={14}
          color="#c8ff00"
          textAlign="center"
          mb={2}
        >
          Mobile number verified successfully
        </Typography>

        <Typography variant="h5" fontWeight="bold" mb={1}>
          New Password Details
        </Typography>

        <Typography fontSize={14} mb={3}>
          Create your password
        </Typography>

        {/* NEW PASSWORD */}
        <TextField
          fullWidth
          type={showPass ? "text" : "password"}
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            bgcolor: "white",
            borderRadius: 1,
            mb: 2,
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPass(!showPass)}
                  edge="end"
                >
                  {showPass ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* CONFIRM PASSWORD */}
        <TextField
          fullWidth
          type={showPass ? "text" : "password"}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          sx={{
            bgcolor: "white",
            borderRadius: 1,
            mb: 3,
          }}
          error={
            confirmPassword.length > 0 && !isMatch
          }
          helperText={
            confirmPassword.length > 0 && !isMatch
              ? "Passwords do not match"
              : ""
          }
        />

        {/* SAVE BUTTON */}
        <Button
          fullWidth
          size="large"
          disabled={!isMatch}
          sx={{
            bgcolor: "red",
            color: "white",
            fontWeight: "bold",
            mb: 2,
            "&:hover": {
              bgcolor: "#b30000",
            },
            "&:disabled": {
              bgcolor: "#ffcccc",
            },
          }}
          onClick={handleSave}
        >
          {loading ? (
            <CircularProgress size={22} sx={{ color: "white" }} />
          ) : (
            "Save"
          )}
        </Button>

        {/* CANCEL BUTTON */}
        <Button
          fullWidth
          size="large"
          variant="outlined"
          sx={{
            color: "white",
            borderColor: "white",
            "&:hover": {
              bgcolor: "rgba(255,255,255,0.1)",
            },
          }}
          onClick={onClose}
        >
          Cancel
        </Button>
      </Box>
    </ForgotPassModal>
  );
}

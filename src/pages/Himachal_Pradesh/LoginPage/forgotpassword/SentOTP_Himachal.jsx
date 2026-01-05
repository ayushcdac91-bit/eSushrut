import React from "react";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import ForgotPassModal from "../../../../features/exampleFeature/components/ForgotPasswordModal";

export default function SentOtpModal({
  open,
  onClose,
  onSendOtp,
  loading,
  type = "mobile",      // "mobile" | "email"
  maskedValue = "****732",
}) {
  return (
    <ForgotPassModal open={open} onClose={onClose}>
      <Box
        sx={{
          bgcolor: "#009688",
          borderRadius: 2,
          p: { xs: 3, md: 4 },
          color: "white",
          maxWidth: '100%',
          textAlign: "center",
        }}
      >
        <Typography variant="h5" fontWeight="bold" mb={2}>
          Forgot Password?
        </Typography>

        <Typography fontSize={14} mb={2} lineHeight={1.6}>
          An OTP (One-Time Password) will be sent to the{" "}
          <b>
            {type === "mobile" ? "mobile number" : "email ID"}
          </b>{" "}
          registered with your account:
        </Typography>

        <Typography
          fontWeight="bold"
          letterSpacing={2}
          mb={3}
        >
          {maskedValue}
        </Typography>

        <Button
          fullWidth
          size="large"
          disabled={loading}
          sx={{
            bgcolor: "red",
            color: "white",
            fontWeight: "bold",
            "&:hover": {
              bgcolor: "#b30000",
            },
          }}
          onClick={onSendOtp}
        >
          {loading ? (
            <CircularProgress size={22} sx={{ color: "white" }} />
          ) : (
            "Sent OTP"
          )}
        </Button>
      </Box>
    </ForgotPassModal>
  );
}

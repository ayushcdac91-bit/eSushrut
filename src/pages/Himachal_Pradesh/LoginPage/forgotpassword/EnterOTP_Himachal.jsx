import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  CircularProgress,
} from "@mui/material";
import ForgotPassModal from "../../../../features/exampleFeature/components/ForgotPasswordModal";

export default function EnterOtpModal({
  open,
  onClose,
  onVerify,
  maskedValue,
  loading,
  type = "mobile",
  resendOtp,
}) {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(60);

  // countdown
  useEffect(() => {
    if (!open) return;

    setTimer(60);
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [open]);

  const handleVerify = () => {
    if (otp.length !== 6) return;
    onVerify(otp);
  };

  const handleResend = () => {
    if (timer === 0) {
      resendOtp();
      setTimer(60);
    }
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
        <Typography variant="h5" fontWeight="bold" mb={1}>
          New Password Details
        </Typography>

        <Typography fontSize={14} mb={3}>
          Enter OTP (One Time Password) sent to your registered
          mobile number:{type === "mobile" ? "mobile number" : "email"}
          <br />
          <strong>{maskedValue}</strong>
        </Typography>

        {/* OTP INPUT */}
        <TextField
          fullWidth
          value={otp}
          onChange={(e) =>
            setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
          }
          placeholder="______"
          inputProps={{
            maxLength: 6,
            style: {
              letterSpacing: "10px",
              textAlign: "center",
              fontSize: 24,
              fontWeight: "bold",
            },
          }}
          sx={{
            bgcolor: "white",
            borderRadius: 1,
            mb: 3,
          }}
        />

        {/* VERIFY BUTTON */}
        <Button
          fullWidth
          size="large"
          disabled={otp.length !== 6}
          sx={{
            bgcolor: "red",
            color: "white",
            fontWeight: "bold",
            "&:hover": {
              bgcolor: "#b30000",
            },
            "&:disabled": {
              bgcolor: "#ffcccc",
            },
          }}
          onClick={handleVerify}

        >
          {loading ? (
            <CircularProgress size={22} sx={{ color: "white" }} />
          ) : (
            "VERIFY"
          )}
        </Button>

        {/* RESEND TIMER */}
        <Typography
          mt={3}
          fontSize={14}
          textAlign="center"
          sx={{
            color: timer === 0 ? "#c8ff00" : "#d0f0e8",
            cursor: timer === 0 ? "pointer" : "default",
          }}
          onClick={handleResend}
        >
          {timer > 0
            ? `Resending OTP in ${timer} seconds`
            : "Resend OTP"}
        </Typography>
      </Box>
    </ForgotPassModal>
  );
}

import React, { useEffect, useRef, useState } from "react";
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
  const timerRef = useRef(null);

  //  reusable timer function
  const startTimer = () => {
    clearInterval(timerRef.current);
    setTimer(60);

    timerRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // start timer when modal opens
  useEffect(() => {
    if (!open) return;

    startTimer();

    return () => clearInterval(timerRef.current);
  }, [open]);

  const handleVerify = () => {
    if (otp.length !== 6) return;
    onVerify(otp);
  };

  const handleResend = async () => {
    if (timer !== 0) return;

    await resendOtp();   // API call
    startTimer();        // timer reset
  };

  return (
    <ForgotPassModal open={open} onClose={onClose}>
      <Box
        sx={{
          bgcolor: "#009688",
          borderRadius: 2,
          p: { xs: 3, md: 4 },
          color: "white",
          maxWidth: "100%",
        }}
      >
        <Typography variant="h5" fontWeight="bold" mb={1}>
          Verify OTP
        </Typography>

        <Typography fontSize={14} mb={3}>
          Enter OTP sent to your registered{" "}
          {type === "mobile" ? "mobile number" : "email"} <br />
          <strong>{maskedValue}</strong>
        </Typography>

        {/* ---------OTP INPUT-------- */}
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

        {/*------------- VERIFY BUTTON -----------*/}
        <Button
          fullWidth
          size="large"
          disabled={otp.length !== 6 || loading}
          sx={{
            bgcolor: "red",
            color: "white",
            fontWeight: "bold",
            "&:hover": { bgcolor: "#b30000" },
          }}
          onClick={handleVerify}
        >
          {loading ? (
            <CircularProgress size={22} sx={{ color: "white" }} />
          ) : (
            "VERIFY"
          )}
        </Button>

        {/*------------- RESEND -------------*/}
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
            ? `Resend OTP in ${timer} seconds`
            : "Resend OTP"}
        </Typography>
      </Box>
    </ForgotPassModal>
  );
}

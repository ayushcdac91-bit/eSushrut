import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  CircularProgress,
} from "@mui/material";
import ForgotPassModal from "../../../../features/exampleFeature/components/ForgotPasswordModal";

export default function OtpSelectionModal({
  open,
  onClose,
  onProceed,
  loading,
}) {
  const [selectedOption, setSelectedOption] = useState("mobile");

  const handleProceed = () => {
    if (!loading) onProceed(selectedOption);
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
          overflowX: "hidden",
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          mb={3}
          textAlign="center"
        >
          Select where to send OTP:
        </Typography>

        <FormControl fullWidth>
          <RadioGroup
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            row
            sx={{ justifyContent: "center", mb: 3 }}
          >
            <FormControlLabel
              value="mobile"
              control={<Radio sx={{ color: "white", "&.Mui-checked": { color: "#fff" } }} />}
              label={<Typography color="white">Mobile Number</Typography>}
            />
            <FormControlLabel
              value="email"
              control={<Radio sx={{ color: "white", "&.Mui-checked": { color: "#fff" } }} />}
              label={<Typography color="white">Email ID</Typography>}
            />
          </RadioGroup>
        </FormControl>

        <Button
          fullWidth
          size="large"
          sx={{
            bgcolor: "red",
            color: "white",
            fontWeight: "bold",
            "&:hover": { bgcolor: "#b30000" },
          }}
          onClick={handleProceed}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "Proceed"}
        </Button>
      </Box>
    </ForgotPassModal>
  );
}

import React, { useState } from "react";

// MODALS
import ForgotPasswordModal from "./forgotpassword/ForgotPassword_Himachal";
import OtpSelectionModal from "./forgotpassword/SelectOTP_Himachal";
import SentOtpModal from "./forgotpassword/SentOTP_Himachal";
import EnterOtpModal from "./forgotpassword/EnterOTP_Himachal";
import NewPasswordModal from "./forgotpassword/NewPassword_Himachal";

// API
import {
  useValidateUsernameMutation,
  useSendOtpMobileMutation,
  useSendOtpEmailMutation,
  useVerifyOtpMobileMutation,
  useResetPasswordMutation,
} from "../../../services/Auth/ForgotPassword";

export default function ForgotPasswordFlow({ open, onClose }) {
  const [step, setStep] = useState(1);

  const [username, setUsername] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [maskedValue, setMaskedValue] = useState("");
  const [otpType, setOtpType] = useState("mobile");

  // ===== RTK QUERY =====
  const [validateUsername, { isLoading: usernameLoading }] =
    useValidateUsernameMutation();

  const [sendOtpMobile, { isLoading: mobileOtpLoading }] =
    useSendOtpMobileMutation();

  const [sendOtpEmail, { isLoading: emailOtpLoading }] =
    useSendOtpEmailMutation();

  const [verifyOtpMobile, { isLoading: verifyOtpLoading }] =
    useVerifyOtpMobileMutation();

  const [resetPassword, { isLoading: resetLoading }] =
    useResetPasswordMutation();

  const resetAll = () => {
    setStep(1);
    setUsername("");
    setMobileNumber("");
    setEmail("");
    setMaskedValue("");
    setOtpType("mobile");
    onClose();
  };

  // ================= STEP 1 =================
  const handleUsernameSubmit = async (value) => {
    try {
      const res = await validateUsername(value).unwrap();

      if (res?.status === "SUCCESS") {
        setUsername(res.UserName);
        setMobileNumber(res.MobileNumber || "");
        setEmail(res.Emailid || res.EmailId || "");
        setStep(2);
      } else {
        alert(res?.message || "User not found");
      }
    } catch {
      alert("Username validation failed");
    }
  };

  // ================= STEP 2 =================
  const handleOtpSelection = (type) => {
    setOtpType(type);

    if (type === "mobile") {
      setMaskedValue(`****${mobileNumber.slice(-3)}`);
    } else {
      if (!email) {
        alert("Email not registered with this user");
        return;
      }
      setMaskedValue(email.replace(/(.{2}).+(@.+)/, "$1****$2"));
    }

    setStep(3);
  };

  // ================= STEP 3 =================
  const handleSendOtp = async () => {
    try {
      if (otpType === "mobile") {
        const res = await sendOtpMobile({
          varUserName: username,
          varMobileNumber: mobileNumber,
        }).unwrap();

        if (res?.["OTP Status"] === "SUCCESS") {
          setStep(4);
        } else {
          alert("Mobile OTP send failed");
        }
      } else {
        const res = await sendOtpEmail({
          varUserName: username,
          varEmailId: email,
        }).unwrap();

        if (res?.["OTP Email Status"] === "SUCCESS") {
          setStep(4);
        } else {
          alert("Email OTP send failed");
        }
      }
    } catch {
      alert("OTP send error");
    }
  };

  // ================= STEP 4 =================
  const handleOtpVerify = async (otp) => {
    try {
      const payload = {
        varUserName: username,
        varMobileNumber: mobileNumber,
        varEmailId: email,
        otp,
      };

      const res = await verifyOtpMobile(payload).unwrap();

      if (res?.message?.toLowerCase().includes("verified")) {
        setStep(5);
      } else {
        alert("Wrong OTP");
      }
    } catch (err) {
      alert(err?.data || "OTP verification failed");
    }
  };

  // ================= STEP 5 =================
  const handlePasswordSave = async (newPassword, confirmPassword) => {
    try {
      await resetPassword({
        varUserName: username,
        varNewPassword: newPassword,
        varConfirmPassword: confirmPassword,
      }).unwrap();

      alert("Password changed successfully");
      resetAll();
    } catch (err) {
      alert(err?.data?.message || "Password reset failed");
    }
  };

  const otpLoading =
    otpType === "mobile" ? mobileOtpLoading : emailOtpLoading;

  return (
    <>
      <ForgotPasswordModal
        open={open && step === 1}
        onProceed={handleUsernameSubmit}
        loading={usernameLoading}
        onClose={resetAll}
      />

      <OtpSelectionModal
        open={open && step === 2}
        onProceed={handleOtpSelection}
        onClose={resetAll}
      />

      <SentOtpModal
        open={open && step === 3}
        maskedValue={maskedValue}
        type={otpType}
        loading={otpLoading}
        onSendOtp={handleSendOtp}
        onClose={resetAll}
      />

      <EnterOtpModal
        open={open && step === 4}
        loading={verifyOtpLoading}
        onVerify={handleOtpVerify}
        onClose={resetAll}
      />

      <NewPasswordModal
        open={open && step === 5}
        loading={resetLoading}
        onSave={handlePasswordSave}
        onClose={resetAll}
      />
    </>
  );
}

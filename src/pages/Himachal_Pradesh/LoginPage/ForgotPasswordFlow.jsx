import React, { useState } from "react";

// MODALS
import ForgotPasswordModal from "./forgot_password/ForgotPassword_Himachal";
import OtpSelectionModal from "./forgot_password/SelectOTP_Himachal";
import SentOtpModal from "./forgot_password/SentOTP_Himachal";
import EnterOtpModal from "./forgot_password/EnterOTP_Himachal";
import NewPasswordModal from "./forgot_password/NewPassword_Himachal";
import useMessagePopup from "../../../hooks/useMessagePopup";
import MessagePopup from "../../../features/exampleFeature/components/MessagePopup";


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

  // -----------MessagePopup------------

  const { popup, showPopup, closePopup } = useMessagePopup();


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
        showPopup(
          "error",
          "Invalid Username",
          "Username not found"
        );
      }
    } catch {
      showPopup(
        "error",
        "Validation Failed",
        "Username validation failed"
      );
    }
  };

  // ================= STEP 2 =================
  const handleOtpSelection = (type) => {
    setOtpType(type);

    if (type === "mobile") {
      setMaskedValue(`****${mobileNumber.slice(-3)}`);
    } else {
      if (!email) {
        showPopup(
          "warning",
          "Email Not Registered",
          "Email not registered with this user"
        );
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
          showPopup(
            "success",
            "OTP Sent",
            "OTP has been sent to your registered mobile number."
          );
          setStep(4);
        } else {
          showPopup(
            "error",
            "OTP Send Failed",
            "Mobile OTP send failed"
          );
        }
      } else {
        const res = await sendOtpEmail({
          varUserName: username,
          varEmailId: email,
        }).unwrap();

        if (res?.["OTP Email Status"] === "SUCCESS") {
          showPopup(
            "success",
            "OTP Sent",
            "OTP has been sent to your registered Email address."
          );
          setStep(4);
        } else {
          showPopup(
            "error",
            "OTP Send Failed",
            "Email OTP send failed"
          );
        }
      }
    } catch {
      showPopup(
        "error",
        "OTP Error",
        "OTP send error"
      );
    }
  };

  // ================= RESEND OTP =================
  const handleResend = async () => {
    try {
      if (otpType === "mobile") {
        await sendOtpMobile({
          varUserName: username,
          varMobileNumber: mobileNumber,
        }).unwrap();
      } else {
        await sendOtpEmail({
          varUserName: username,
          varEmailId: email,
        }).unwrap();
      }

      showPopup(
        "success",
        "OTP Resent",
        `OTP has been resent to your registered ${otpType === "mobile" ? "mobile number" : "email"
        }.`
      );
    } catch (err) {
      showPopup(
        "error",
        "Resend Failed",
        err?.data?.message || "Unable to resend OTP"
      );
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
        showPopup(
          "warning",
          "Wrong OTP",
          "Provided OTP is incorrect"
        );
      }
    } catch (err) {
      showPopup(
        "error",
        "Not Verified",
        "OTP verification failed"
      );
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
      showPopup(
        "success",
        "password Changed",
        "Password changed successfully."
      );
      resetAll();
    } catch (err) {
      showPopup(
        "error",
        "Reset Failed",
        "Password reset failed"
      );
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
        resendOtp={handleResend}
        onClose={resetAll}
      />

      <NewPasswordModal
        open={open && step === 5}
        loading={resetLoading}
        onSave={handlePasswordSave}
        onClose={resetAll}
      />
      <MessagePopup
        open={popup.open}
        type={popup.type}
        title={popup.title}
        message={popup.message}
        onClose={closePopup}
      />
    </>
  );
}

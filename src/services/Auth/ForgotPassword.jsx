import { apiSlice } from "../ApiSlice";

export const forgotPasswordApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    // ================= VALIDATE USERNAME =================
    validateUsername: builder.mutation({
      query: (varUserName) => ({
        url: "/auth/forgot/username",
        method: "POST",
        body: { varUserName },
      }),
    }),

    // ================= SEND OTP - MOBILE =================
    sendOtpMobile: builder.mutation({
      query: ({ varUserName, varMobileNumber }) => ({
        url: "/auth/forgot/send-otp-mobile",
        method: "POST",
        body: { varUserName, varMobileNumber },
      }),
    }),

    // ================= SEND OTP - EMAIL =================
    sendOtpEmail: builder.mutation({
      query: ({ varUserName, varEmailId }) => ({
        url: "/auth/forgot/send-otp-email",
        method: "POST",
        body: { varUserName, varEmailId },
      }),
    }),

    // ================= VERIFY OTP =================
    // Mobile and Email both use the same verify endpoint on backend
    verifyOtpMobile: builder.mutation({
      query: ({ varUserName, varMobileNumber, varEmailId, otp }) => ({
        url: "/auth/forgot/verify-otp-mobile",
        method: "POST",
        body: {
          varUserName,
          // Send only one of mobile or email
          ...(varMobileNumber && { varMobileNumber }),
          ...(varEmailId && { varEmailId }),
          otp,
        },
      }),
    }),

    // ================= RESET PASSWORD =================
    resetPassword: builder.mutation({
      query: ({ varUserName, varNewPassword, varConfirmPassword }) => ({
        url: "/auth/forgot/reset",
        method: "POST",
        body: { varUserName, varNewPassword, varConfirmPassword },
      }),
    }),
  }),
});

export const {
  useValidateUsernameMutation,
  useSendOtpMobileMutation,
  useSendOtpEmailMutation,
  useVerifyOtpMobileMutation,
  useResetPasswordMutation,
} = forgotPasswordApi;

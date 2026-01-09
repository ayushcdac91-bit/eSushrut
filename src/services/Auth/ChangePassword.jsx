import { apiSlice } from "../ApiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    changePassword: builder.mutation({
      query: ({ oldPassword, newPassword, confirmPassword }) => ({
        url: "/auth/change-password",
        method: "POST",
        body: {
          varOldPassword: oldPassword,
          varNewPassword: newPassword,
          varConfirmPassword: confirmPassword,
        },
      }),
    }),
  }),
});

export const { useChangePasswordMutation } = authApi;

import { apiSlice } from "../ApiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (payload) => ({
        url: "/auth/login",
        method: "POST",
        body: payload,
      }),
      transformResponse: (response) => response, //  IMPORTANT
    }),
  }),
});

export const { useLoginMutation } = authApi;

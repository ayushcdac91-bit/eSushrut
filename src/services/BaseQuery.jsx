// import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const rawBaseQuery = fetchBaseQuery({
//   baseUrl: "http://localhost:8080",
//   prepareHeaders: (headers) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       headers.set("authorization", `Bearer ${token}`);
//     }
//     headers.set("Content-Type", "application/json");
//     return headers;
//   },
// });

// export const baseQueryWithAuth = async (args, api, extraOptions) => {
//   const result = await rawBaseQuery(args, api, extraOptions);

//   if (result?.error?.status === 401) {
//     localStorage.clear();
//     window.location.href = "/";
//   }

//   return result;
// };

import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rawBaseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8080",
  prepareHeaders: (headers, { endpoint }) => {
    //  Forgot password APIs token not required
    const publicEndpoints = [
      "validateUsername",
      "sendOtpMobile",
      "sendOtpEmail",
      "verifyOtpMobile",
      // "changePassword",
    ];

    if (!publicEndpoints.includes(endpoint)) {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
    }

    headers.set("Content-Type", "application/json");
    return headers;
  },
});

export const baseQueryWithAuth = async (args, api, extraOptions) => {
  const result = await rawBaseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    localStorage.clear();
    window.location.href = "/";
  }

  return result;
};




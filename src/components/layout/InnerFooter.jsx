import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

const Innerfooter = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      setDateTime(now.toLocaleString("en-IN", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        background: "linear-gradient(to right, #49B2F3, #02629C)",
        color: "#fff",
        zIndex: 1200,
        px: 2,
        py: { xs: 0.8, sm: 1 },
      }}
    >
      {/* MOBILE / TABLET */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          flexDirection: "column",
          alignItems: "center",
          gap: 0.3,
        }}
      >
        <Typography
          variant="body2"
          sx={{ fontWeight: 600, fontSize: "12px" }}
        >
          © Centre For Development of Advanced Computing
        </Typography>

        <Typography
          variant="body2"
          sx={{ fontWeight: 600, fontSize: "11px" }}
        >
          {dateTime}
        </Typography>
      </Box>

      {/* DESKTOP */}
      <Box
        sx={{
          display: { xs: "none", md: "flex"},
          alignItems: "center",
          position: "relative",
          minHeight: 32,
        }}
      >
        {/* CENTER TEXT */}
        <Typography
          variant="body2"
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            fontWeight: 600,
            whiteSpace: "nowrap",
          }}
        >
          © Centre For Development of Advanced Computing
        </Typography>

        {/* RIGHT TIME */}
        <Typography
          variant="body2"
          sx={{
            fontWeight: 600,
            whiteSpace: "nowrap",
          }}
        >
          {dateTime}
        </Typography>
      </Box>
    </Box>
  );
};

export default Innerfooter;

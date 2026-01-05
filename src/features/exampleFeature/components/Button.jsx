import React from "react";
import { Button, Box } from "@mui/material";

export default function CustButton({
  children,
  onClick,
  hoverBg,
  bg,
  mt = 3,
  px = 4,
  py = 1.2,
  fontSize = 16,
  borderRadius = 2,
  fullWidth = false,
  disabled = false,
  center = true,     
  ...rest
}) {
  return (
    <Box
      sx={{
        display: center ? "flex" : "block",
        justifyContent: center ? "center" : "flex-start",
        width: "100%",
      }}
    >
      <Button
        variant="contained"
        fullWidth={fullWidth}
        disabled={disabled}
        onClick={onClick}
        sx={{
          mt: mt,
          background: bg,
          px: px,
          py: py,
          fontSize: fontSize,
          borderRadius: borderRadius,
          fontWeight: 600,
          textTransform: "none",
          "&:hover": { background: hoverBg },
        }}
        {...rest}
      >
        {children}
      </Button>
    </Box>
  );
}

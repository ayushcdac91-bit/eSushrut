import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Footer(
  { bgColor = "#1a8c8c", }
) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // md = 900px

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: bgColor,
        color: "white",
        textAlign: isMobile ? "center" : "left",
        py: 1,
        px: 2,
        zIndex: 1200,
        paddingLeft:0.2,
        paddingBottom:0.1,
        paddingTop:0.1,
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        justifyContent: isMobile ? "center" : "space-between",
        gap: isMobile ? 1 : 5
      }}
    >
      {/* Logo */}
      <Box
        component="img"
        src="/images/Logo/cdac_logo1.png"
        alt="logo"
        sx={{
          height: 40,
          mx: isMobile ? "auto" : 0,
        }}
      />

      {/* Text 1 */}
      <Typography
        variant="body2"
        sx={{
          lineHeight: 1.4,
          fontSize: isMobile ? 12 : 14,
        }}
      >
        © 2025 Hospital Management Information System. Designed & Developed by
        C-DAC Noida.
      </Typography>

      {/* Text 2 (HIDE IN MOBILE VIEW) */}
      <Typography
        variant="body2"
        sx={{
          lineHeight: 1.4,
          fontSize: 14,
          display: isMobile ? "none" : "block", // 👈 mobile me hide
        }}
      >
        Kindly use Firefox browser to run this application.
      </Typography>
    </Box>
  );
}

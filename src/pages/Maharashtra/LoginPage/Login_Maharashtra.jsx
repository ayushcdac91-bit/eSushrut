import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
  Avatar,
} from "@mui/material";
import Navbar_Mah from "../../../components/ui/Navbar_Maharashtra.jsx";
import PersonIcon from "@mui/icons-material/Person";
import MyInput from "../../../features/exampleFeature/components/InputField.jsx";
import Captchacode from "../../../features/exampleFeature/components/CaptchaCode.jsx";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import Footer from "../../../components/layout/Footer.jsx";
import { useThemeColor } from "../../../components/layout/ThemeColors.jsx";
import Settingicon from "../../../features/exampleFeature/components/SettingIcon_ThemeColor.jsx";
import { darken } from "@mui/material/styles";
import About_Mah from "../ui/About_Maharashtra.jsx";
import Features_Mah from "../ui/Features_Maharashtra.jsx";
import GallerySwiper from "../ui/Gallery_Maharashtra.jsx";
import ForgotPasswordModal from "./ForgotPassword_Maharashtra.jsx";

// Background images
const bgImages = [
  "/images/Login_Maharashtra/hospital-management-system.png",
  "/images/Login_Maharashtra/slide3.jpg",
  "/images/Login_Maharashtra/pg-diploma-healthcare-hospital-management.jpg",
];

export default function Login_Mah() {
  const { primaryColor } = useThemeColor();
  const [openForgot, setOpenForgot] = useState(false);
  const [index, setIndex] = useState(0);
  const [username, setUsername] = useState("");
  const captchaValidator = useRef(null);

  const handleLogin = () => {
    if (!captchaValidator.current()) return;
    alert("✅ Login successful (captcha matched)");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % bgImages.length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  const next = () =>
    setIndex((prev) => (prev + 1) % bgImages.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + bgImages.length) % bgImages.length);

  return (
    <>
    <section id='login'>
      {/* ---------------- NAVBAR ---------------- */}
      <Navbar_Mah />

      {/* -------- SLIDER ARROWS (hide on mobile) -------- */}
      <IconButton
        onClick={prev}
        sx={{
          display: { xs: "none", sm: "flex" },
          position: "absolute",
          top: "50%",
          left: 10,
          transform: "translateY(-50%)",
          background: "white",
          zIndex: 1000,
        }}
      >
        <ArrowBackIosNew />
      </IconButton>

      <IconButton
        onClick={next}
        sx={{
          display: { xs: "none", sm: "flex" },
          position: "absolute",
          top: "50%",
          right: 10,
          transform: "translateY(-50%)",
          background: "white",
          zIndex: 1000,
        }}
      >
        <ArrowForwardIos />
      </IconButton>

      {/* ---------------- BACKGROUND ---------------- */}
      <Box
        sx={{
          minHeight: { xs: "auto", sm: "100vh", md: "100vh" },
          backgroundImage: `url(${bgImages[index]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: { xs: "flex-start", sm: "center" },
          px: { xs: 1, sm: 2 },
          pt: { xs: 10, sm: 0 },
          position: "relative",
        }}
      >
        {/* -------- THEME SETTING ICON -------- */}
        <Settingicon />

        {/* ---------------- HEADER ---------------- */}
        <Box sx={{ mb: 3, textAlign: "center" }}>
          <Typography
            sx={{
              fontWeight: 600,
              color: primaryColor,
              fontSize: {
                xs: "0.9rem",
                sm: "1.1rem",
                md: "1.85rem",
              },
              lineHeight: 1.4,
            }}
          >
            Commissionerate of Health Services of Maharashtra
          </Typography>

          <Typography
            sx={{
              mt: 0.5,
              color: primaryColor,
              fontSize: {
                xs: "0.75rem",
                sm: "0.85rem",
                md: "1.45rem",
              },
            }}
          >
            Hospital Management Information System
          </Typography>
        </Box>

        {/* ---------------- LOGIN CARD ---------------- */}
        <Card
          sx={{
            maxWidth: 450,
            width: "100%",
            borderRadius: 3,
            boxShadow: 6,
            minHeight: { xs: "auto", sm: "70vh", md: "65vh" },
            opacity: 0.9,
          }}
        >
          <CardContent
            sx={{
              position: "relative",
              textAlign: "center",
              px: { xs: 1.5, sm: 3 },
              pt: { xs: 4, sm: 6 },
            }}
          >
            <Box
              component="img"
              src="/images/Login_Maharashtra/new-shushrut logo1.png"
              alt="logo"
              sx={{ height: 60, position: "absolute", left: 0 }}
            />

            {/* -------- TITLE -------- */}
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: 600, color: primaryColor }}
              >
                LOGIN
              </Typography>
              <Avatar
                sx={{
                  bgcolor: primaryColor,
                  width: { xs: 48, sm: 56 },
                  height: { xs: 48, sm: 56 },
                  mx: "auto",
                  mt: 1,
                }}
              >
                <PersonIcon fontSize="large" />
              </Avatar>
            </Box>

            {/* -------- INPUTS -------- */}
            <Box sx={{ px: 1 }}>
              <MyInput
                label="Username"
                placeholder="User"
                value={username}
                onChange={(e) =>
                  setUsername(e.target.value.replace(/[^A-Za-z_]/g, ""))
                }
              />
              <MyInput
                label="Password"
                type="password"
                placeholder="Password"
              />

              <Captchacode
                onValidate={(fn) => (captchaValidator.current = fn)}
              />

              <Button
                fullWidth
                size="large"
                variant="contained"
                onClick={handleLogin}
                sx={{
                  mt: 1,
                  py: { xs: 1.2, sm: 1.4 },
                  borderRadius: 10,
                  bgcolor: primaryColor,
                  fontWeight: 600,
                  "&:hover": {
                    bgcolor: darken(primaryColor, 0.2),
                  },
                }}
              >
                Login
              </Button>

              <Typography
                mt={2}
                sx={{
                  cursor: "pointer",
                  fontSize: "0.85rem",
                  color: primaryColor,
                }}
                onClick={() => setOpenForgot(true)}
              >
                Forgot Password?
              </Typography>
              <ForgotPasswordModal
                                open={openForgot}
                                onClose={() => setOpenForgot(false)}
                              />
            </Box>

            <Box
              component="img"
              src="/images/Login_Maharashtra/images_PHD(3).png"
              alt="img"
              sx={{ height: 60, position: "absolute", left: 0, bottom: 0 }}
            />
            <Box
              component="img"
              src="/images/Login_Maharashtra/images_NHM(3).png"
              alt="img"
              sx={{ height: 60, position: "absolute", right: 0, bottom: 0 }}
            />
          </CardContent>
        </Card>
      </Box>

      {/* ---------------- FOOTER ---------------- */}
      <Footer
        bgColor={primaryColor}
        sx={{ position: "relative", zIndex: 2, pb: { xs: 2, sm: 0 } }}
      />
      <About_Mah></About_Mah>
      <Features_Mah></Features_Mah>
      <GallerySwiper></GallerySwiper>
      </section>
    </>
  );
}

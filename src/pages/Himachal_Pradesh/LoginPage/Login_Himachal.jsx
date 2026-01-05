import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Avatar,
  IconButton,
} from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Navbar from "../../../components/ui/Navbar_Himachal.jsx";
import Footer from "../../../components/layout/Footer.jsx";
import Features_HP from "../ui/Features_Himachal.jsx";
import Gallery_HP from "../ui/Gallery_Himachal.jsx";
import MyInput from "../../../features/exampleFeature/components/InputField.jsx";
import About_HP from "../ui/About_Himachal.jsx";
import Captchacode from "../../../features/exampleFeature/components/CaptchaCode.jsx";
import ForgotPasswordFlow from "./ForgotPasswordFlow.jsx";
import { useLoginMutation } from "../../../services/Auth/LoginPage.jsx";

// ------------------- THEME -------------------
const theme = createTheme({
  palette: {
    primary: { main: "#157e84" },
  },
  typography: {
    fontFamily: "Inter, Roboto, sans-serif",
  },
});

// Background images
const bgImages = [
  "/images/Login_Himachal/AI-radiology-og.jpg",
  "/images/Login_Himachal/new-img.png",
  "/images/Login_Himachal/Healthcare-Payer-Services.jpg",
];

export default function Login_Himachal() {
  const [index, setIndex] = useState(0);
  const [openForgot, setOpenForgot] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const captchaValidator = useRef(null);

   const [login, { isLoading }] = useLoginMutation();

  const handleCaptcha = async () => {
    if (!captchaValidator.current()) return;

    // captcha success → login API call
    await handleLogin();
  };

  // ---------------- SLIDER AUTO CHANGE ----------------
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

  // ---------------- LOGIN API ----------------
  const handleLogin = async () => {
    if (loading) return;
    try {
      setLoading(true);
      const payload = {
        varUserName: username.trim(),
        varPassword: password.trim(),
        varHospitalCode: "",
        varUserId: "",
        varSeatId: "",
        varEmpNo: "",
        varQuestionId: "",
        varHintAnswer: "",
      };

    const res = await login(payload).unwrap();
console.log("LOGIN RESPONSE:", res);

// Only bsuccess condition

if (res?.message === "Login Success") {
  const user = res.UserData[0];

// save data

  localStorage.setItem("token", user.jwtToken);
  localStorage.setItem("username", user.varUserName);
  localStorage.setItem("hospitalCode", user.varHospitalCode);
        alert("Login Successful");
        navigate("/Home_Reg");
      } else {
        alert(data.varLoginMessage || "Invalid username or password");
      }
    } catch (err) {
      console.error("Login API Error:", err);
      alert("Server error");
    }
    finally {
      setLoading(false);
    }
  };



  return (
    <ThemeProvider theme={theme}>
      <Box
        id="login"
        sx={{
          minHeight: "100vh",
          width: "98vw",
          position: "relative",
          overflowX: "hidden",
        }}
      >
        {/* ----------- BACKGROUND SLIDER ----------- */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${bgImages[index]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "0.8s ease-in-out",
            zIndex: 0,
            opacity: 0.93,
          }}
        />

        {/* ----------- SLIDER BUTTONS ----------- */}
        <IconButton
          onClick={prev}
          sx={{
            position: "absolute",
            top: "50%",
            left: 10,
            transform: "translateY(-50%)",
            bgcolor: "white",
            zIndex: 1100,
          }}
        >
          <ArrowBackIosNew />
        </IconButton>

        <IconButton
          onClick={next}
          sx={{
            position: "absolute",
            top: "50%",
            right: 10,
            transform: "translateY(-50%)",
            bgcolor: "white",
            zIndex: 1200,
          }}
        >
          <ArrowForwardIos />
        </IconButton>

        {/* ----------- NAVBAR ----------- */}
        <Navbar />

        {/* ----------- LOGIN CARD ----------- */}
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: "flex-start",
            minHeight: "calc(100vh - 80px)",
            pt: { xs: 16, md: 15 },
            pl: { md: 20 },
            position: "relative",
            zIndex: 1001,
            opacity: 0.85
          }}
        >
          <Card
            sx={{
              width: { xs: "90%", sm: 350, md: 380 },
              borderRadius: 4,
              boxShadow: 4,
            }}
          >
            <CardContent>
              <Box sx={{ textAlign: "center", mb: 2 }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 600, color: "#157e84" }}
                >
                  LOGIN
                </Typography>
                <Avatar
                  sx={{
                    bgcolor: "#157e84",
                    width: 56,
                    height: 56,
                    mx: "auto",
                    mt: 1,
                  }}
                >
                  <PersonIcon fontSize="large" />
                </Avatar>
              </Box>

              <MyInput
                label="Username"
                placeholder="Username"
                value={username}
                onChange={(e) =>
                  //setUsername(e.target.value)
                  setUsername(e.target.value.replace(/[^A-Za-z_]/g, ""))
                }
              />

              <MyInput
                label="Password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Captchacode
                onValidate={(fn) => (captchaValidator.current = fn)}
              />

              <Button
                variant="contained"
                loading={loading}
                fullWidth
                sx={{ py: 1.2, fontSize: 16, mt: 2 }}
                onClick={handleCaptcha}
                disabled={loading}
              >
                LOGIN
              </Button>
              <Link style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    mt: 2,
                    textAlign: "center",
                    fontWeight: 600,
                    color: "#157e84",
                    cursor: "pointer",
                  }}
                  onClick={() => setOpenForgot(true)}
                >
                  Forgot Password?
                </Typography>
                <ForgotPasswordFlow
                  open={openForgot}
                  onClose={() => setOpenForgot(false)}
                />
              </Link>
            </CardContent>
          </Card>
        </Box>

        <Footer />
      </Box>

      <About_HP />
      <Features_HP />
      <Gallery_HP />
    </ThemeProvider>
  );
}

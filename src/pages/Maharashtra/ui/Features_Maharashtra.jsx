import React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
} from "@mui/material";
import DecorativeDivider from "../../../features/exampleFeature/components/DecorativeDivider";
import { useThemeColor } from "../../../components/layout/ThemeColors";

const features = [
  {
    title: "Ayushman Bharat Digital Mission",
    img: "/public/images/Features_Maharashtra/abdm.png",
    desc:
      "The Ayushman Bharat Digital Mission (previously known as National Digital Health Mission) is an agency of the Government of India. e-Sushrut Maharastra application compliance with Ayushman Bharat Digital Mission. Its integrated with M1, M2 & M3 level",
  },
  {
    title: "Electronic Health Record",
    img: "/public/images/Features_Maharashtra/Hos.png",
    desc:
      "An Electronic Health Record (EHR) is an electronic version of a patient's longitudinal health record. EHR may contain medical history, diagnoses, medications, treatment plans, immunization dates, allergies and test results of a patient across time.",
  },
  {
    title: "Medical Billing",
    img: "/public/images/Features_Maharashtra/rupee.png",
    desc:
      "Integrated Medical Billing system for OPD, IPD and Ancillary services. Improved UI on cash collection desks, equipped with Patient Wallet and Ledger Folio billing system",
  },
  {
    title: "Dashboard and Dynamic Reports",
    img: "/public/images/Features_Maharashtra/line-chart.png",
    desc:
      "Integrated Dashboard works in real-time management information system, visual presentation for quick statistics to hospital authorities. Dynamic reports provide facility to generate reports with frequent updates.",
  },
];

export default function Features_Mah() {
  const { primaryColor } = useThemeColor();

  return (
    <Box id='features'sx={{ py: 6, backgroundColor: "#fff", minHeight:"85vh" }}>
      <Container maxWidth="xl">
        {/* ---------- TITLE ---------- */}
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: 600, pb: 2, color: primaryColor }}
        >
          FEATURES
        </Typography>

        {/* ---------- DIVIDER ---------- */}
        <DecorativeDivider />

        {/* ---------- FEATURES GRID ---------- */}
        <Grid container spacing={6} justifyContent="center" pt='120px'>
          {features.map((item, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              {/* CARD WRAPPER (FIXED SIZE) */}
              <Box
                textAlign="center"
                sx={{
                  width: "100%",
                  maxWidth: 300,
                  mx: "auto",
                  minHeight: 480,
                }}
              >
                {/* CIRCLE ICON */}
                <Box
                  sx={{
                    width: 200,
                    height: 200,
                    borderRadius: "50%",
                    backgroundColor: "#fff",
                    boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
                    mx: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 3,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: `0 12px 45px ${primaryColor}`,
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={item.img}
                    alt={item.title}
                    sx={{
                      maxWidth: "80%",
                      maxHeight: "80%",
                    }}
                  />
                </Box>

                {/* TITLE */}
                <Typography
                  fontWeight={600}
                  fontSize="1.05rem"
                  gutterBottom
                  color={primaryColor}
                >
                  {item.title}
                </Typography>

                {/* LINE */}
                <Box
                  sx={{
                    width: 60,
                    height: 2,
                    bgcolor: primaryColor,
                    mx: "auto",
                    mb: 2,
                  }}
                />

                {/* DESCRIPTION */}
                <Typography
                  fontSize="0.9rem"
                  color="text.secondary"
                  lineHeight={1.7}
                >
                  {item.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

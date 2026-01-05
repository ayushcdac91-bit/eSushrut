import React, { useState } from "react";
import DecorativeDivider from "../../../features/exampleFeature/components/DecorativeDivider";
import CustomCard from "../../../features/exampleFeature/components/CustomCards";
import CustomModal from "../../../features/exampleFeature/components/Modals";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Modal,
  Button,
} from "@mui/material";

export default function Features_HP() {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const details = {
    ehr: `An Electronic Health Record (EHR) is an electronic version of a patient longitudinal
     health record. EHR may contain medical history, diagnoses, medications, treatment plans,
      immunization dates, allergies and test results of a patient across time.`,

    billing: `Integrated Medical Billing system for OPD,
    IPD and Ancillary services.Improved UI on cash collection desks ,
    equipped with Patient Wallet..`,

    barcode: `Do not spend hours in patient registration and lab tests.Smart HMIS system generates
     a unique barcode for every new patient registration and lab samples.Patients OPD/IPD files
      will have barcode sticker on it and only takes seconds to scan and offer hospital services
       like revisits,billing,pharmacy and IPD services etc.Better tracking due to less human error,
       save time and money.`,

    dashboard: `Integrated Dashboard Works in real time management information system, visual presentation
     for quick statistics to hospital authorities.Dynamic Report provide facility to generate report
    due to intermittent transactions, frequent update.`,

    mobile: `Mobile Apps and Web Portal Provisional Registration services with Aadhaar
      QR Scan provision through Mobile App and Web Portal services.Features such as Online
      investigation report view/download and comphrensive Doctor login desk provisions are
      also been provided in mobile apps.`,

    aspatal: `Integrated with MOH&FW ICT-based Patient Satisfaction System (PSS) Mera Aspataal
     / My Hospital for empowering the patient by seeking his / her views/feedbacks on quality
      of experience in a public healthcare facility through SMS and IVRS.`
  };
  const featureData = [
    {
      title: "Electronic Health Record",
      image: "/images/Features_Himachal/plus.png",
      text: "An Electronic Health Record (EHR) is an electronic version of a patient’s record.",
      key: "ehr",
    },
    {
      title: "Medical Billing",
      image: "/images/Features_Himachal/rupee-sign.png",
      text: "Integrated Medical Billing system for OPD, IPD and ancillary services.",
      key: "billing",
    },
    {
      title: "Barcode Integration",
      image: "/images/Features_Himachal/barcode.png",
      text: "Do not spend hours in patient registration and lab tests.",
      key: "barcode",
    },
    {
      title: "Dashboard and Dynamic Reports",
      image: "/images/Features_Himachal/document-icon.png",
      text: "Integrated dashboard works in real-time management information system.",
      key: "dashboard",
    },
    {
      title: "Mobile Application & Web Portal",
      image: "/images/Features_Himachal/payment-check.png",
      text: "Provisional Registration services with Aadhaar QR Scan.",
      key: "mobile",
    },
    {
      title: "Integration with Mera Aspataal",
      image: "/images/Features_Himachal/mera.png",
      text: "Integrated with MOH&FW Patient Satisfaction System.",
      key: "aspatal",
    },
  ];


  const showPopup = (key, title) => {
    setContent(details[key]);
    setModalTitle(title);
    setOpen(true);
  };

  return (
    <section id='features'>
      {/*------------------ SECTION---------------- */}
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          background: "#f7f7f7",
          py: 4,
          borderBottom: "1px solid gray",
          minHeight: {
            xs: "auto",
            sm: "120vh",
            md: "110vh",
          },

        }}
      >
        {/* --------------------TITLE------------------- */}
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: 600, pb: 2, color: '#157e84' }}
        >
          FEATURES
        </Typography>

        {/*----------------- Decorative Divider----------- */}
        <DecorativeDivider></DecorativeDivider>

        {/*----------------- Feature Cards Grid------------- */}
        <Grid container spacing={3} sx={{ maxWidth: "1200px", mx: "auto", pt: 5, justifyContent: "center" }}>
          {featureData.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} width="380px" >
              <CustomCard
                title={item.title}
                image={item.image}
                text={item.text}
                onReadMore={() => showPopup(item.key, item.title)}
              />
            </Grid>
          ))}
        </Grid>

        {/* -------- MODAL -------- */}
        <CustomModal
          open={open}
          onClose={() => setOpen(false)}
          title={modalTitle}
        >
          <Typography sx={{ whiteSpace: "pre-line", mb: 2, display: 'flex', justifyContent: 'center' }}>
            {content}
          </Typography>
        </CustomModal>


      </Box>
    </section>
  );
}

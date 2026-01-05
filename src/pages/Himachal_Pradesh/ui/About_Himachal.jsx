import React, { useState } from 'react';
import DecorativeDivider from '../../../features/exampleFeature/components/DecorativeDivider';
import CustButton from '../../../features/exampleFeature/components/Button';
import {
  Box,
  Typography,
  Button,
  Modal,
  Card,
  CardContent,
} from '@mui/material';
import CustomModal from '../../../features/exampleFeature/components/Modals';

export default function About_HP() {
  const [open, setOpen] = useState(false);

  const fullText = `
e-Sushrut C-DAC’s Hospital Management Information System is a major step 
towards adapting technology to improve healthcare. HMIS incorporates an 
integrated computerized clinical information system for improved hospital 
administration and patient healthcare. It also provides an accurate, 
electronically stored medical record of the patient. A data warehouse of 
such records can be utilized for statistical requirements and for research. 
The real-time HMIS streamlines the treatment flow of patients and 
simultaneously empowering workforce to perform to their peak ability, in 
an optimized and efficient manner. It is modeled on the unique combination 
of a ‘patient centric and medical staff centric’ paradigm, thus providing 
benefits to both the recipients and the providers of healthcare. It ensures 
dramatic improvement in performance along with reducing the costs.
  `;

  return (
    <section id='about'>
      <Box sx={{ px: { xs: 2, md: 6 }, py: 8, background: '#f2f2f2ff',minHeight:'80vh' }}>

        {/* ----------------------TITLE ------------------------ */}
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: 600, pb: 2, color: '#157e84' }}
        >
          ABOUT US
        </Typography>

        {/*------------------ Decorative Divider----------------- */}
        <DecorativeDivider></DecorativeDivider>

        {/* ------------------- MAIN CONTENT -------------------- */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 5,
          }}
        >
          {/*------------- Left Image ---------------*/}
          <Box sx={{ flex: 1, textAlign: 'center' }}>
            <img
              src="/images/About_Himachal/aboutus.png"
              alt="About Us"
              style={{
              
                width: '100%',
                maxWidth: '600px',
              }}
            />
          </Box>

          {/*---------------- Right Text ----------------*/}
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ textAlign: 'justify', lineHeight: 1.7, color: '#6b6969ff' }}>
              e-Sushrut C-DAC’s Hospital Management Information System is a major step
              towards adapting technology to improve healthcare...
            </Typography>
            {/* -------Button------- */}
            <CustButton onClick={() => setOpen(true)} bg="#d18700" hoverBg="#b47000">
              Read More
            </CustButton>
          </Box>
        </Box>

        {/* -------- MODAL -------- */}
        <CustomModal
          open={open}
          onClose={() => setOpen(false)}
          title="About Us"
          color='#086b7c'
        >
          <Typography sx={{ whiteSpace: "pre-line", mb: 2, display: 'flex', justifyContent: 'center' }}>
            {fullText}
          </Typography>
        </CustomModal>
      </Box>
    </section>
  );
}

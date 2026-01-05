import React, { useState } from 'react';
import DecorativeDivider from '../../../features/exampleFeature/components/DecorativeDivider';
import CustButton from '../../../features/exampleFeature/components/Button';
import { useThemeColor } from '../../../components/layout/ThemeColors';
import { darken } from "@mui/material/styles";
import {
    Box,
    Typography,    
} from '@mui/material';
import CustomModal from '../../../features/exampleFeature/components/Modals';

export default function About_Mah() {
    const { primaryColor } = useThemeColor();
    const [open, setOpen] = useState(false);

    const fullText = `
e-Sushrut C-DAC's Hospital Management Information System 
( Adopted by CHS Maharashtra For State Wide Digitization of Health Service in
36 DH and 710 PHC's) is a major step towards adapting technology to improve healthcare.
HMIS incorporates an integrated computerized clinical information system for
improved hospital administration and patient health care. It also provides an
accurate, electronically stored medical record of the patient. A data warehouse 
of such records can be utilized for statistical requirements and for research.
The real time HMIS streamlines the treatment flow of patients and simultaneously
empowering workforce to perform to their peak ability, in an optimized and efficient manner.
  `;

    return (
        <section id='about'>
            <Box sx={{ px: { xs: 2, md: 6, minHeight:'80vh'}, py: 8, background: '#f2f2f2ff' }}>

                {/* ----------------------TITLE ------------------------ */}
                <Typography
                    variant="h4"
                    align="center"
                    sx={{ fontWeight: 600, pb: 2, color: primaryColor }}
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
                        pt:10
                    }}
                >
                    {/*------------- Left Image ---------------*/}
                    <Box sx={{ flex: 1, textAlign: 'center' }}>
                        <img
                            src="/images/About_Maharashtra/picwish(2).png"
                            alt="About Us"
                            style={{
                                width: '100%',
                                maxWidth: '700px',
                            }}
                        />
                    </Box>

                    {/*---------------- Right Text ----------------*/}
                    <Box sx={{ flex: 1 }}>
                        <Typography sx={{ textAlign: 'justify', lineHeight: 1.7, color: '#6b6969ff' }}>
                            e-Sushrut C-DAC's Hospital Management Information System ( Adopted by CHS 
                            Maharashtra For State Wide Digitization of Health Service in 36 DH and 710
                             PHC's) is a major step towards adapting technology to improve healthcare.
                        </Typography>
                        {/* -------Button------- */}
                        <CustButton onClick={() => setOpen(true)} bg={primaryColor} hoverBg={darken(primaryColor, 0.2)}>
                            Read More
                        </CustButton>
                    </Box>
                </Box>

                {/* -------- MODAL -------- */}
                <CustomModal
                    open={open}
                    onClose={() => setOpen(false)}
                    title="About Us"
                    color={primaryColor}
                >
                    <Typography sx={{ whiteSpace: "pre-line", mb: 2, display: 'flex', justifyContent: 'center' }}>
                        {fullText}
                    </Typography>
                </CustomModal>
            </Box>
        </section>
    );
}

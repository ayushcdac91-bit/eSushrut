import React, { useState, useEffect, useRef } from "react";
import {
    Box,
    Typography,
    Slider,
} from "@mui/material";
import DecorativeDivider from "../../../features/exampleFeature/components/DecorativeDivider";
import CstImgModal from "../../../features/exampleFeature/components/ImageModal";
import { useThemeColor } from '../../../components/layout/ThemeColors';
import Contact_Mah from "../ui/Contact_Maharashtra";

const images = [
    "/images/Gallery_Maharashtra/Arogya_Bhawan.jpeg",
    "/images/Gallery_Maharashtra/Alibag_1.jpg",
    "/images/Gallery_Maharashtra/Igatpuri_1.jpg",
    "/images/Gallery_Maharashtra/Kalwan_1.png",
    "/images/Gallery_Maharashtra/Malegaon_1.jpg",
    "/images/Gallery_Maharashtra/Nasik_1.jpg",
    "/images/Gallery_Maharashtra/Kalwan_1.png",
];

export default function Gallery_Mah() {
    const { primaryColor } = useThemeColor();
    const [open, setOpen] = useState(false);
    const [openSrc, setOpenSrc] = useState("");
    const [speed, setSpeed] = useState(1.2);
    const [paused, setPaused] = useState(false);

    const sliderRef = useRef(null);

    // -------- Infinite Loop Logic --------
    useEffect(() => {
        const slider = sliderRef.current;
        let frame;

        const scrollLoop = () => {
            if (!paused && slider) {
                slider.scrollLeft += speed;

                if (slider.scrollLeft >= slider.scrollWidth / 2) {
                    slider.scrollLeft = 0;
                }
            }

            frame = requestAnimationFrame(scrollLoop);
        };

        frame = requestAnimationFrame(scrollLoop);

        return () => cancelAnimationFrame(frame);
    }, [speed, paused]);

    return (
        <Box id="gallery" sx={{ background: "#f0eeeeff", p: 5 }}>

            {/* ----------------------TITLE ------------------------ */}

            <Typography
                variant="h4"
                align="center"
                sx={{ fontWeight: 600, pb: 2, color: primaryColor}}
            >
                GALLERY
            </Typography>

            {/*------------------ Decorative Divider----------------- */}

            <DecorativeDivider></DecorativeDivider>

            {/* ----------------------Slider------------------------- */}
            <Box
                sx={{
                    overflowX: "scroll",
                    whiteSpace: "nowrap",
                    scrollbarWidth: "none",
                    "&::-webkit-scrollbar": { display: "none" },
                    mb: 3,
                    pt: "95px"
                }}
                ref={sliderRef}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                <Box sx={{ display: "inline-flex" }}>
                    {[...images, ...images].map((src, i) => (
                        <Box
                            key={i}
                            onClick={() => {
                                setOpenSrc(src);
                                setOpen(true);
                            }}
                            sx={{
                                width: 260,
                                height: 170,
                                borderRadius: 2,
                                mx: 1,
                                overflow: "hidden",
                                cursor: "pointer",
                                "& img": {
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                },
                            }}
                        >
                            <img src={src} alt="" />
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* Speed Slider */}
            <Box sx={{
                width: {
                    xs: "90%",
                    sm: "70%",
                    md: "40%",
                    lg: "25%",
                }, mx: "auto", mb: 5
            }}>
                <Slider
                    value={speed}
                    min={0.4}
                    max={4}
                    step={0.2}
                    onChange={(e, value) => setSpeed(value)}
                    sx={{
                        color: primaryColor,
                        height: 8,
                        "& .MuiSlider-thumb": {
                            width: 18,
                            height: 18,
                        },
                    }}
                />
            </Box>

            {/*-------------Lightbox Modal---------- */}
            <CstImgModal
                open={open}
                onClose={() => setOpen(false)}
                src={openSrc}>
            </CstImgModal>
          <Contact_Mah></Contact_Mah>
        </Box>
    );
}

import React from "react";
import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function CstImgModal({ open, onClose, src }) {
    return (
        <Modal open={open} onClose={onClose}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    bgcolor: "#d9e8e7ff",
                    p: 2,
                    borderRadius: 2,
                }}
            >
                {/*----------- Close Button ------------*/}
                <IconButton
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        top: -10,
                        right: -10,
                        background: "red",
                        color: "white",
                        "&:hover": { background: "#d10e0eff" },
                    }}
                >
                    <CloseIcon />
                </IconButton>

                {/*--------------Image--------------- */}
                <img
                    src={src}
                    alt="preview"
                    style={{
                        maxWidth: "70vw",
                        maxHeight: "70vh",
                        display: "block",
                    }}
                />
            </Box>
        </Modal>
    );
}

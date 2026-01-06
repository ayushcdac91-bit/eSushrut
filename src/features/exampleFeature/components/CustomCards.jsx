import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import CustButton from "./Button";

export default function CustomCard({ title, image, text, onReadMore }) {
  return (
    <Card
      sx={{
        height: '340px',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 2,
        border: "1px solid #eee",
        borderRadius: "8px",
        boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
        },
      }}
    >
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h5" sx={{ mb: 2 , fontWeight:600}}>
          {title}
        </Typography>

        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: "90px",
            height: "90px",
            m: "15px auto",
            display: "block",
          }}
        />

        <Typography sx={{ color: "#555", fontSize: "15px", mb: 2 }}>
          {text}
        </Typography>

        {/*---------Button only if onReadMore prop exists ----------*/}
        {onReadMore && (
          <CustButton onClick={onReadMore} bg="#e59e19ff" hoverBg="#c67c07ff">
            Read More
          </CustButton>
        )}

      </CardContent>
    </Card>
  );

}

import { Box } from "@mui/material";

export default function DecorativeDivider() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        my: 2,
        width: "100%",
      }}
    >
      {/*-------------------Left Line --------------------*/}
      <Box
        sx={{
          flex: 1,
          maxWidth: { xs: "60px", sm: "120px" },  // responsive
          height: "2px",
          background: "#d1830b",
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            width: { xs: "40px", sm: "100px" },
            height: "2px",
            background: "#d1830b",
            bottom: "-6px",
            left: { xs: "10px", sm: "10px" },
          },
        }}
      />

      {/*----------------- Diamond Box -----------------*/}
      <Box
        sx={{
          width: { xs: "16px", sm: "20px" },
          height: { xs: "16px", sm: "20px" },
          border: "3px solid #1e83d4",
          transform: "rotate(45deg)",
          mx: { xs: 1, sm: 2 },
          background: "white",
        }}
      />

      {/*------------- Right Line ---------------*/}
      <Box
        sx={{
          flex: 1,
          maxWidth: { xs: "60px", sm: "120px" },
          height: "2px",
          background: "#d1830b",
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            width: { xs: "40px", sm: "100px" },
            height: "2px",
            background: "#d1830b",
            bottom: "-6px",
            left: { xs: "10px", sm: "10px" },
          },
        }}
      />
    </Box>
  );
}

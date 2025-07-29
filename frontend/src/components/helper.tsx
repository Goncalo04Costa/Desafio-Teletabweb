import React from "react";
import { Box, Typography, Button } from "@mui/material";
import helper from "../images/helper.png"; // caminho correto

export default function Helper() {
  return (
    <Box
      sx={{
        height: 454,
        backgroundColor: "#171A1C",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: "60px",
        paddingRight: "60px",
      }}
    >
      {/* Coluna do texto e botões */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          marginRight: "60px",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: 48,
            fontWeight: "bold",
            fontFamily: "Inter",
            lineHeight: 1.2,
            textAlign: "left",
            marginBottom: "32px",
          }}
        >
          Want to see how <br /> ASOAgent can help?
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 4,
          }}
        >
          <Button
            sx={{
              backgroundColor: "#0A69FF",
              borderRadius: "9999px",
              color: "#fff",
              padding: "10px 28px",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "#0855cc",
              },
            }}
          >
            Talk to sales
          </Button>

          <Typography
            component="a"
            href="#"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              textDecoration: "none",
              fontSize: 14,
              borderBottom: "2px solid #E57373",
              lineHeight: 2,
              paddingBottom: "2px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            START FOR FREE
          </Typography>
        </Box>
      </Box>

      {/* Caixa à direita */}
      <Box
        sx={{
          width: 488,
          height: 294,
          border: "1px solid #394046",
          borderRadius: "30px",
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          paddingLeft: "50px",
          paddingTop: "90px",
          paddingBottom: "30px",
          gap: "20px",
          overflow: "hidden",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 200,
            fontSize: "14px",
            color: "#FFF",
          }}
        >
          Sarah R., PaperSign
        </Typography>

        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 300,
            fontSize: "14px",
            width: "76%",
            color: "#FFF",
            lineHeight: 1.5,
          }}
        >
          “We’ve tried multiple ASO tools, but this one feels like having a
          dedicated ASO expert on the team. The metadata suggestions are
          genuinely tailored, not just keyword stuffing. It’s fast, accurate,
          and actually helps us grow installs and revenue. Huge time-saver.”
        </Typography>

        <Box
          component="img"
          src={helper}
          alt="Testimonial visual"
          sx={{
            width: "80px",
            height: "80px",
            marginTop: "-20px",   
            marginLeft: "280px",
          }}
        />
      </Box>
    </Box>
  );
}

import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

export const GlimpsesFromPravasa2024Section = (): JSX.Element => {
  
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "100vh", sm: "600px", md: "702px" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "url(https://c.animaapp.com/JdgpojVL/img/frame-34.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background with overlay */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          bgcolor: "custom.darkGreen",
          opacity: 0.5,
        }}
      />

      {/* Content container */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "27px",
          maxWidth: "1013px",
          px: 2,
          zIndex: 1,
        }}
      >
        
        {/* Text content */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "5px",
            width: "100%",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: "var(--heading-font-family)",
              fontWeight: 300,
              fontSize: { xs: "28px", sm: "34px", md: "40px" },
              color: "text.secondary",
              textAlign: "center",
              width: "100%",
              mt: "-1px",
              px: { xs: 2, md: 0 }
            }}
          >
            CULTIVATING CONNECTIONS : SEED TO SUCCESS
          </Typography>

          <Typography
            sx={{
              fontFamily: "var(--heading-font-family)",
              fontWeight: 300,
              fontSize: { xs: "20px", sm: "24px", md: "29.3px" },
              color: "text.secondary",
              textAlign: "center",
              width: "100%",
              px: { xs: 2, md: 0 }
            }}
          >
            Latest Seed Varieties, Agri-Tech Innovations and Live Demonstrations
          </Typography>
        </Box>

        {/* Register button */}
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/registration"
          sx={{
            width: "200px",
            height: "50px",
            borderRadius: "8px",
            fontWeight: "bold",
            fontSize: "1.25rem",
            color: "primary.main",
            textTransform: "uppercase",
            textDecoration: "none",
          }}
        >
          REGISTER NOW
        </Button>
      </Box>
    </Box>
  );
};
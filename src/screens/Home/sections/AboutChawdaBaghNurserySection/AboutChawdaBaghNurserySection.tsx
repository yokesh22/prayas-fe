import { Box, Container, Typography } from "@mui/material";
import React from "react";

export const AboutChawdaBaghNurserySection = (): JSX.Element => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "#ffcb13",
        padding: { xs: 2, md: 8 },
        minHeight: "743px",
        width: "100%",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              width: "100%",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: "var(--heading-font-family)",
                fontSize: "var(--heading-font-size)",
                fontWeight: "var(--heading-font-weight)",
                letterSpacing: "var(--heading-letter-spacing)",
                lineHeight: "var(--heading-line-height)",
                fontStyle: "var(--heading-font-style)",
                textAlign: "center",
                color: "#383f2b",
              }}
            >
              VENUE
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontFamily: "var(--body-font-family)",
                fontSize: "var(--body-font-size)",
                fontWeight: "var(--body-font-weight)",
                letterSpacing: "var(--body-letter-spacing)",
                lineHeight: "var(--body-line-height)",
                fontStyle: "var(--body-font-style)",
                textAlign: "center",
                color: "#383f2b",
              }}
            >
              Nandanvan Road, Vill- Chandanidih, Post, Tatibandh, Raipur,
              Chhattisgarh 492099
            </Typography>
          </Box>

          <Box
            component="img"
            src="https://c.animaapp.com/JdgpojVL/img/map-1.png"
            alt="Map"
            sx={{
              width: "100%",
              height: "500px",
              objectFit: "cover",
              borderRadius: 1,
              cursor: "pointer", // Indicate it's clickable
            }}
            onClick={() => window.open("https://maps.app.goo.gl/2jFd2x3UMMEXvUtw5?g_st=ic", "_blank")}
          />
        </Box>
      </Container>
    </Box>
  );
};

import DownloadIcon from "@mui/icons-material/Download";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";

export const WhatToExpectSection = (): JSX.Element => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: "50px", md: "75px" },
        py: { xs: "40px", md: "62px" },
        bgcolor: "custom.oliveGreen",
        width: "100%",
      }}
    >
      <Typography
        variant="h1"
        color="text.secondary"
        textAlign="center"
        sx={{
          fontFamily: "var(--heading-font-family)",
          fontSize: "var(--heading-font-size)",
          fontWeight: "var(--heading-font-weight)",
          letterSpacing: "var(--heading-letter-spacing)",
          lineHeight: "var(--heading-line-height)",
          fontStyle: "var(--heading-font-style)",
        }}
      >
        WHY EXHIBIT WITH PRAYAAS
      </Typography>

      <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={5}
            alignItems="center"
            width="100%"
          >
            <Box
              sx={{
                width: { xs: "100%", md: "501px" },
                height: { xs: "200px", sm: "283px" },
                borderRadius: "8px",
                backgroundImage:
                  "url(https://c.animaapp.com/JdgpojVL/img/clip-path-group.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                flexShrink: 0,
              }}
            />

            <Stack 
              spacing={7.5} 
              sx={{ 
                width: "100%",
                maxWidth: { xs: "100%", md: "602px" }, 
                px: { xs: 2, md: 0 } 
              }}
            >
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  fontFamily: "var(--body-font-family)",
                  fontSize: { xs: "15px", md: "var(--body-font-size)" },
                  fontWeight: "var(--body-font-weight)",
                  letterSpacing: "var(--body-letter-spacing)",
                  lineHeight: "var(--body-line-height)",
                  fontStyle: "var(--body-font-style)",
                  width: "100%",
                }}
              >
              Get a chance to showcase your best hybrid varieties directly to a
              massive audience of progressive farmers and agri-dealers.
              <br />
              <br />
              Priority-based booking of live demo plots
              <br />
              Dedicated nursery space with trellis system
              <br />
              Drip irrigation &amp; mulch beds provided
              <br />
              Trained manpower for crop maintenance
              <br />
              Branding &amp; visibility at strategic locations
            </Typography>

            <Stack 
              direction={{ xs: "column", sm: "row" }} 
              spacing={{ xs: 2, sm: 5 }}
              width="100%"
            >
              <Button
                variant="contained"
                color="primary"
                sx={{
                  height: "40px",
                  fontFamily: "'Funnel_Sans', Helvetica",
                  fontWeight: "bold",
                  fontSize: "16px",
                  lineHeight: "21.8px",
                  whiteSpace: "nowrap",
                  width: { xs: "100%", sm: "auto" }
                }}
              >
                KNOW MORE
              </Button>

              <Button
                variant="outlined"
                sx={{
                  height: "40px",
                  borderColor: "secondary.main",
                  color: "secondary.main",
                  padding: "9px 16px",
                  fontFamily: "'Funnel_Sans', Helvetica",
                  fontWeight: 800,
                  fontSize: { xs: "14px", sm: "16px" },
                  whiteSpace: "nowrap",
                  width: { xs: "100%", sm: "auto" }
                }}
                startIcon={
                  <DownloadIcon
                    sx={{
                      width: "11.67px",
                      height: "16.67px",
                    }}
                  />
                }
              >
                EXHIBITOR BROCHURE
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

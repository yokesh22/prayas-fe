import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { AboutChawdaBaghNurserySection } from "./sections/AboutChawdaBaghNurserySection";
import { EventHighlightsSection } from "./sections/EventHighlightsSection";
import { ExhibitorsListSection } from "./sections/ExhibitorsListSection";
import { ExhibitorsSection } from "./sections/ExhibitorsSection";
import { FrameSubsection } from "./sections/FrameSubsection";
import { GlimpsesFromPravasa2024Section } from "./sections/GlimpsesFromPravasa2024Section";
import { HighlightsWrapperSection } from "./sections/HighlightsWrapperSection";
import { VenueSection } from "./sections/VenueSection";
import { WelcomeSection } from "./sections/WelcomeSection";
import { WhatToExpectSection } from "./sections/WhatToExpectSection";

export const Home = (): JSX.Element => {
  // Data for the glimpses section
  const glimpsesImages = [
    {
      id: 1,
      src: "https://c.animaapp.com/JdgpojVL/img/image-5.png",
      alt: "Main event image",
      width: 760,
      height: 690,
      isLarge: true,
    },
    {
      id: 2,
      src: "https://c.animaapp.com/JdgpojVL/img/image-6@2x.png",
      alt: "Event image",
      width: 238,
      height: 210,
    },
    {
      id: 3,
      src: "https://c.animaapp.com/JdgpojVL/img/image-7@2x.png",
      alt: "Event image",
      width: 238,
      height: 210,
    },
    {
      id: 4,
      src: "https://c.animaapp.com/JdgpojVL/img/image-8@2x.png",
      alt: "Event image",
      width: 238,
      height: 210,
    },
    {
      id: 5,
      src: "https://c.animaapp.com/JdgpojVL/img/image-9@2x.png",
      alt: "Event image",
      width: 238,
      height: 210,
    },
    {
      id: 6,
      src: "https://c.animaapp.com/JdgpojVL/img/image-10@2x.png",
      alt: "Event image",
      width: 238,
      height: 210,
    },
    {
      id: 7,
      src: "https://c.animaapp.com/JdgpojVL/img/image-11@2x.png",
      alt: "Event image",
      width: 238,
      height: 210,
    },
  ];

  // Data for the exhibitors section
  const exhibitorLogos = [
    {
      id: 1,
      src: "https://c.animaapp.com/JdgpojVL/img/untitled-2-1@2x.png",
      alt: "Exhibitor logo",
      width: 499.23,
      height: 109.68,
    },
    {
      id: 2,
      src: "https://c.animaapp.com/JdgpojVL/img/untitled-2-2@2x.png",
      alt: "Exhibitor logo",
      width: 498.85,
      height: 109.77,
    },
  ];

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      bgcolor="background.default"
      data-model-id="95:44"
      minHeight="100vh"
    >
      {/* Fixed header */}
      <EventHighlightsSection />
      
      <Box 
        position="relative" 
        width="100%" 
        maxWidth="1440px" 
        overflow="hidden" 
        sx={{ 
          mt: { xs: "80px", sm: "109px" },
          display: "flex",
          flexDirection: "column",
          flex: 1,
          margin: "0 auto"
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: { xs: "100vh", sm: "600px", md: "702px" },
            position: "relative",
          }}
        >
          <GlimpsesFromPravasa2024Section />
        </Box>
        <ExhibitorsListSection />
        <FrameSubsection />
        

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: { xs: "40px 20px", sm: "50px 40px", md: "60px 81px" },
            backgroundColor: "#7a4f29",
            minHeight: { xs: "auto", md: "910px" },
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "50px",
              width: "100%",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: "white",
                textAlign: "center",
                fontFamily: "var(--heading-font-family)",
                fontSize: "var(--heading-font-size)",
                fontWeight: "var(--heading-font-weight)",
                letterSpacing: "var(--heading-letter-spacing)",
                lineHeight: "var(--heading-line-height)",
                fontStyle: "var(--heading-font-style)",
                marginTop: "-1px",
              }}
            >
              GLIMPSES FROM PRAYAAS 2024
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "40px",
                width: "100%",
                flexWrap: { xs: "wrap", md: "nowrap" },
              }}
            >
              <Box
                component="img"
                src="https://c.animaapp.com/JdgpojVL/img/image-5.png"
                alt="Main event area of Prayaas 2024"
                sx={{
                  width: { xs: "100%", md: "760px" },
                  height: { xs: "350px", sm: "500px", md: "690px" },
                  objectFit: "cover",
                }}
              />

              <Grid
                container
                spacing={2.5}
                sx={{
                  width: { xs: "100%", md: "498px" },
                  height: "690px",
                }}
              >
                {glimpsesImages
                  .filter((img) => !img.isLarge)
                  .map((image, index) => (
                    <Grid item xs={6} key={image.id}>
                      <Box
                        component="img"
                        src={image.src}
                        alt={image.alt}
                        sx={{
                          width: "100%",
                          height: "210px",
                          objectFit: "cover",
                        }}
                      />
                    </Grid>
                  ))}
              </Grid>
            </Box>
          </Box>
        </Box>

        <HighlightsWrapperSection />

        <Box
          component="section"
          sx={{
            width: "100%",
            bgcolor: "#283c09",
            padding: { xs: "0 16px 40px", md: "0 81px 60px" },
            position: "relative",
          }}
        >
          <Stack spacing={7.75} alignItems="center" width="100%">
            <Typography
              variant="h1"
              color="text.secondary"
              textAlign="center"
              sx={{
                fontFamily: "var(--heading-font-family)",
                fontSize: { xs: "32px", md: "var(--heading-font-size)" },
                fontWeight: "var(--heading-font-weight)",
                letterSpacing: "var(--heading-letter-spacing)",
                lineHeight: "var(--heading-line-height)",
                fontStyle: "var(--heading-font-style)",
                mt: -0.125,
              }}
            >
              2024 EXHIBITORS
            </Typography>

            {/* Desktop view */}
            <Stack
              direction="row"
              spacing={3.24}
              justifyContent="center"
              width="100%"
              sx={{ display: { xs: 'none', md: 'flex' } }}
            >
              {exhibitorLogos.map((logo) => (
                <Box
                  key={logo.id}
                  component="img"
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  sx={{ objectFit: "cover" }}
                />
              ))}
            </Stack>
            
            {/* Mobile view */}
            <Stack 
              spacing={3.375} 
              width="100%" 
              sx={{ display: { xs: 'flex', md: 'none' } }}
            >
              {exhibitorLogos.map((logo) => (
                <Box
                  key={logo.id}
                  width="100%"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Box
                    component="img"
                    src={logo.src}
                    alt={logo.alt}
                    width="100%"
                    height="auto"
                    maxWidth="300px"
                    sx={{ display: "block" }}
                  />
                </Box>
              ))}
            </Stack>
          </Stack>
        </Box>

        <ExhibitorsSection />
        <WhatToExpectSection />
        <WelcomeSection />
        <AboutChawdaBaghNurserySection />
        <VenueSection />

        <Box
          sx={{
            display: "inline-flex",
            height: "59px",
            alignItems: "center",
            justifyContent: "center",
            padding: "12px 16px",
            position: "fixed",
            top: "734px",
            left: "1030px",
            bgcolor: "rgba(255, 255, 255, 0.8)",
            borderRadius: "8px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            backdropFilter: "blur(4px) brightness(100%)",
          }}
        >
          <Stack direction="row" alignItems="center" spacing={0.875}>
            <LocationOnIcon
              sx={{
                width: "16.11px",
                height: "16.11px",
                marginLeft: "-0.81px",
                color: "#12462d",
              }}
            />
            <Typography
              sx={{
                fontFamily: "'Funnel Sans', Helvetica",
                fontWeight: 600,
                fontSize: "18px",
                color: "#12462d",
                whiteSpace: "nowrap",
              }}
            >
              28–30 Nov 25, Raipur
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

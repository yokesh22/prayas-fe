import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { EventHighlightsSection } from "./sections/EventHighlightsSection";
import { ExhibitorLogosSection } from "./sections/ExhibitorLogosSection";
import { ExhibitorsSection } from "./sections/ExhibitorsSection";
import { FacilitiesProvidedSection } from "./sections/FacilitiesProvidedSection";
import { FooterSection } from "./sections/FooterSection";
import { SiteMapSection } from "./sections/SiteMapSection";
import { StallPricesSection } from "./sections/StallPricesSection";

export const ExhibitorsPage = (): JSX.Element => {
  // Data for glimpses section
  const glimpseImages = [
    {
      src: "https://c.animaapp.com/mcwvg0grSIsRNR/img/image.png",
      alt: "Event overview",
      width: 760,
      height: 690,
    },
    {
      src: "https://c.animaapp.com/mcwvg0grSIsRNR/img/image-1.png",
      alt: "Event image 1",
      width: 238,
      height: 210,
    },
    {
      src: "https://c.animaapp.com/mcwvg0grSIsRNR/img/image-2.png",
      alt: "Event image 2",
      width: 238,
      height: 210,
    },
    {
      src: "https://c.animaapp.com/mcwvg0grSIsRNR/img/image-3.png",
      alt: "Event image 3",
      width: 238,
      height: 210,
    },
    {
      src: "https://c.animaapp.com/mcwvg0grSIsRNR/img/image-4.png",
      alt: "Event image 4",
      width: 238,
      height: 210,
    },
    {
      src: "https://c.animaapp.com/mcwvg0grSIsRNR/img/image-5.png",
      alt: "Event image 5",
      width: 238,
      height: 210,
    },
    {
      src: "https://c.animaapp.com/mcwvg0grSIsRNR/img/image-6.png",
      alt: "Event image 6",
      width: 238,
      height: 210,
    },
  ];

  // Data for exhibitor logos
  const exhibitorLogos = [
    {
      src: "https://c.animaapp.com/mcwvg0grSIsRNR/img/untitled-2-1.png",
      alt: "Exhibitor logo 1",
      width: 499.23,
      height: 109.68,
    },
    {
      src: "https://c.animaapp.com/mcwvg0grSIsRNR/img/untitled-2-2.png",
      alt: "Exhibitor logo 2",
      width: 498.85,
      height: 109.77,
    },
  ];

  return (
    <Box display="flex" justifyContent="center" bgcolor="background.default">
      {/* Fixed header */}
      <EventHighlightsSection />
      
      <Box width="100%" maxWidth="1440px" position="relative" sx={{ mt: { xs: "80px", sm: "109px" } }}>
        <Box position="relative">
          <Box
            component="img"
            src="https://c.animaapp.com/mcwvg0grSIsRNR/img/mask-group.png"
            alt="Mask group"
            width="100%"
            height="702px"
          >

              
          </Box>
          <Divider sx={{ bgcolor: "#967353" }} />

          <SiteMapSection />

          {/* Glimpses Section */}
          <Box
            sx={{
              bgcolor: "#7a4f29",
              py: { xs: 4, md: 7.5 },
              px: { xs: 2, sm: 5, md: 10 },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap="50px"
              width="100%"
            >
              <Typography
                variant="h1"
                color="text.secondary"
                textAlign="center"
                sx={{ fontFamily: "heading" }}
              >
                GLIMPSES FROM PRAYAAS 2024
              </Typography>

              <Grid container spacing={2.5} justifyContent="center">
                <Grid item xs={12} md={6}>
                  <Box
                    component="img"
                    src={glimpseImages[0].src}
                    alt={glimpseImages[0].alt}
                    sx={{ 
                      width: "100%", 
                      height: { xs: "350px", sm: "500px", md: "690px" },
                      objectFit: "cover" 
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Grid
                    container
                    spacing={2.5}
                    sx={{ 
                      width: "100%", 
                      height: { xs: "auto", md: 690 } 
                    }}
                  >
                    {glimpseImages.slice(1).map((image, index) => (
                      <Grid item key={index} xs={6}>
                        <Box
                          component="img"
                          src={image.src}
                          alt={image.alt}
                          width={image.width}
                          height={image.height}
                          sx={{ objectFit: "cover" }}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>

          {/* Event Highlights Section */}
          <ExhibitorLogosSection />
        </Box>

        {/* Site Map Display Section */}
        <Box
          sx={{
            py: 7.5,
            px: 8.5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            bgcolor: "background.default",
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="38px"
            width="1280px"
          >
            <Typography
              variant="h1"
              color="text.primary"
              textAlign="center"
              sx={{ fontFamily: "heading" }}
            >
              SITE MAP
            </Typography>

            <Box position="relative" width="971px" height="497.25px">
              <Box position="relative" width="971px" height="497px">
                <Box
                  component="img"
                  src="https://c.animaapp.com/mcwvg0grSIsRNR/img/clip-path-group.png"
                  alt="Site map"
                  sx={{
                    position: "absolute",
                    width: "893px",
                    height: "497px",
                    top: 0,
                    left: 0,
                  }}
                />
                <Box
                  component="img"
                  src="https://c.animaapp.com/mcwvg0grSIsRNR/img/clip-path-group-1.png"
                  alt="Site map detail"
                  sx={{
                    position: "absolute",
                    width: "170px",
                    height: "161px",
                    top: "318px",
                    left: "801px",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>

        <StallPricesSection />
        <FacilitiesProvidedSection />

        <Box>
          <ExhibitorsSection />
        </Box>
        <FooterSection />
      </Box>
    </Box>
  );
};
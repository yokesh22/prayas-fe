import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";

// Facility data for mapping
const facilitiesData = [
  {
    icon: "https://c.animaapp.com/mcwvg0grSIsRNR/img/frame-94.svg",
    title: "Table\nx 2",
    alt: "Table icon",
  },
  {
    icon: "https://c.animaapp.com/mcwvg0grSIsRNR/img/frame-90-3.svg",
    title: "Chairs\nx 2",
    alt: "Chairs icon",
  },
  {
    icon: "https://c.animaapp.com/mcwvg0grSIsRNR/img/frame-90-1.svg",
    title: "Power Point\nx1",
    alt: "Power Point icon",
  },
  {
    icon: "https://c.animaapp.com/mcwvg0grSIsRNR/img/frame-90-2.svg",
    title: "Stall Name Fascia",
    alt: "Stall Name Fascia icon",
  },
  {
    icon: "https://c.animaapp.com/mcwvg0grSIsRNR/img/group.png",
    title: "General Lighting",
    alt: "General Lighting icon",
    isImage: true,
    width: "46px",
    height: "55.9px",
  },
  {
    icon: "https://c.animaapp.com/mcwvg0grSIsRNR/img/frame-90.svg",
    title: "Security",
    alt: "Security icon",
  },
];

export const FacilitiesProvidedSection = (): JSX.Element => {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        py: { xs: 4, md: 4.25 },
        px: { xs: 2, sm: 4, md: 10 },
        width: "100%",
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 1, sm: 2, md: 3 } }}>
        <Stack spacing={4} alignItems="center">
          <Typography
            variant="h1"
            color="text.secondary"
            align="center"
            sx={{
              fontFamily: "var(--heading-font-family)",
              fontSize: { xs: "28px", md: "var(--heading-font-size)" },
              fontWeight: "var(--heading-font-weight)",
              letterSpacing: "var(--heading-letter-spacing)",
              lineHeight: "var(--heading-line-height)",
              fontStyle: "var(--heading-font-style)",
            }}
          >
            FACILITIES PROVIDED
          </Typography>

          <Grid 
            container 
            spacing={{ xs: 3, md: 6 }}
            justifyContent="center"
            sx={{ width: "100%" }}
          >
            {facilitiesData.map((facility, index) => (
              <Grid 
                item 
                xs={6} 
                sm={4} 
                md={2} 
                key={index}
                sx={{ 
                  display: 'flex',
                  justifyContent: 'center',
                  mb: { xs: 2, md: 0 }
                }}
              >
                <Stack
                  alignItems="center"
                  spacing={1.5}
                  sx={{ 
                    width: "104px",
                    maxWidth: { xs: "90px", sm: "104px" }
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: "70px", sm: "86px" },
                      height: { xs: "70px", sm: "86px" },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {facility.isImage ? (
                      <Box
                        component="img"
                        src={facility.icon}
                        alt={facility.alt}
                        sx={{
                          width: { xs: "40px", sm: facility.width || "86px" },
                          height: { xs: "50px", sm: facility.height || "86px" },
                          objectFit: "contain",
                        }}
                      />
                    ) : (
                      <Box
                        component="img"
                        src={facility.icon}
                        alt={facility.alt}
                        sx={{
                          width: { xs: "70px", sm: "86px" },
                          height: { xs: "70px", sm: "86px" },
                          objectFit: "contain",
                        }}
                      />
                    )}
                  </Box>
                  <Typography
                    color="text.secondary"
                    align="center"
                    sx={{
                      fontFamily: "var(--body-font-family)",
                      fontSize: { xs: "14px", sm: "var(--body-font-size)" },
                      fontWeight: "var(--body-font-weight)",
                      letterSpacing: "var(--body-letter-spacing)",
                      lineHeight: { xs: 1.2, sm: "var(--body-line-height)" },
                      fontStyle: "var(--body-font-style)",
                      width: "100%",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {facility.title}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

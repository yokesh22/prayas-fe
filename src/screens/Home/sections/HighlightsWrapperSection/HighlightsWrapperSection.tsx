import { Box, Container, Grid, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

// Data for highlights to enable mapping
const highlightsData = [
  {
    icon: "https://c.animaapp.com/JdgpojVL/img/vector.svg",
    text: "200+\ncrops\non display",
    width: "122px",
    height: "110px",
    alt: "Crops Icon",
  },
  {
    icon: "https://c.animaapp.com/JdgpojVL/img/vector-1.svg",
    text: "50+ Leading Seed Companies",
    width: "86.6px",
    height: "92px",
    alt: "Seed Companies Icon",
  },
  {
    icon: "https://c.animaapp.com/JdgpojVL/img/vector-2.svg",
    text: "3 Days of Innovation & Knowledge Exchange",
    width: "82px",
    height: "83px",
    alt: "Innovation Icon",
  },
  {
    icon: "https://c.animaapp.com/JdgpojVL/img/group-6@2x.png",
    text: "5,000+ Visiting Farmers",
    width: "87.99px",
    height: "88.01px",
    alt: "Farmers Icon",
  },
  {
    icon: "https://c.animaapp.com/JdgpojVL/img/vector-3.svg",
    text: "Customized Display Plots",
    width: "132px",
    height: "115px",
    alt: "Display Plots Icon",
  },
];

export const HighlightsWrapperSection = (): JSX.Element => {
  const theme = useTheme();
  const isExtraSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isSmall = useMediaQuery(theme.breakpoints.down('md'));
  const isMedium = useMediaQuery(theme.breakpoints.down('lg'));

  // Determine number of columns based on screen size
  const getColumnCount = () => {
    if (isExtraSmall) return 2; // Changed from 1 to 2 for mobile view
    if (isSmall) return 2;
    if (isMedium) return 3;
    return 5; // Default to 5 columns on large screens
  };

  return (
    <Box
      sx={{
        bgcolor: "custom.oliveGreen",
        py: { xs: 5, md: 7.5 },
        width: "100%",
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
        <Stack spacing={{ xs: 5, md: 9.5 }} alignItems="center">
          <Typography
            variant="h1"
            color="text.secondary"
            align="center"
            sx={{
              fontSize: { xs: "32px", md: "var(--heading-font-size)" },
              fontWeight: "var(--heading-font-weight)",
              fontFamily: "var(--heading-font-family)",
              letterSpacing: "var(--heading-letter-spacing)",
              lineHeight: "var(--heading-line-height)",
              fontStyle: "var(--heading-font-style)",
            }}
          >
            2024 EVENT HIGHLIGHTS
          </Typography>

          <Grid 
            container 
            spacing={{ xs: 4, md: 3 }} 
            justifyContent="center"
            alignItems="stretch"
            sx={{ width: "100%" }}
          >
            {highlightsData.map((highlight, index) => (
              <Grid 
                item 
                xs={6}
                sm={6} 
                md={4} 
                lg={12 / getColumnCount()} 
                key={index}
                sx={{ 
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  height: { xs: index < 4 ? '160px' : 'auto', sm: 'auto' } // Fixed height for first 4 items on mobile
                }}
              >
                <Stack
                  alignItems="center"
                  spacing={1.5}
                  sx={{
                    width: {
                      xs: "100%",
                      sm: index === 0
                        ? "122px"
                        : index === 1
                          ? "115px"
                          : index === 2
                            ? "141px"
                            : index === 3
                              ? "112px"
                              : "132px",
                    },
                    maxWidth: { xs: "120px", sm: "200px" },
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: { xs: "flex-start", sm: "center" },
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-5px)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={highlight.icon}
                    alt={highlight.alt}
                    sx={{
                      width: { xs: highlight.width === "132px" ? "70px" : "60px", sm: highlight.width },
                      height: { xs: highlight.height === "115px" ? "65px" : "55px", sm: highlight.height },
                      mb: { xs: 1, sm: 2 },
                      objectFit: "contain",
                    }}
                  />
                  <Typography
                    color="text.secondary"
                    align="center"
                    sx={{
                      fontSize: { xs: "12px", sm: "18px" },
                      fontFamily: "'Funnel Sans', Helvetica",
                      fontWeight: 400,
                      whiteSpace: "pre-line",
                      lineHeight: { xs: 1.2, sm: "normal" },
                      wordBreak: "break-word",
                      flex: 1,
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "center",
                    }}
                  >
                    {highlight.text}
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

import { Box, Container, Grid, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { ImageComponent } from "./ImageComponent"; // Import the new component

// Image data for the gallery
const IMAGES = [
  { 
    src: "https://c.animaapp.com/mcwvg0grSIsRNR/img/rectangle.png", 
    alt: "Exhibition booth with agricultural displays", 
    width: 281, 
    height: 167,
    fullImage: "https://c.animaapp.com/mcwvg0grSIsRNR/img/rectangle.png"
  },
  { 
    src: "https://c.animaapp.com/mcwvg0grSIsRNR/img/rectangle-1.png", 
    alt: "Farmers examining crop varieties", 
    width: 281, 
    height: 167,
    fullImage: "https://c.animaapp.com/mcwvg0grSIsRNR/img/rectangle-1.png"
  },
  { 
    src: "https://c.animaapp.com/mcwvg0grSIsRNR/img/rectangle-2.png", 
    alt: "Agricultural technology demonstration", 
    width: 281, 
    height: 160,
    fullImage: "https://c.animaapp.com/mcwvg0grSIsRNR/img/rectangle-2.png"
  },
  { 
    src: "https://c.animaapp.com/mcwvg0grSIsRNR/img/rectangle-3.png", 
    alt: "Seed variety showcase", 
    width: 281, 
    height: 160,
    fullImage: "https://c.animaapp.com/mcwvg0grSIsRNR/img/rectangle-3.png"
  },
];

export const SiteMapSection = (): JSX.Element => {
  const theme = useTheme();
  const isExtraSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isSmall = useMediaQuery(theme.breakpoints.down('md'));
  const isMedium = useMediaQuery(theme.breakpoints.down('lg'));

  // Determine number of columns based on screen size
  const getColumnCount = () => {
    if (isExtraSmall) return 1;
    if (isSmall) return 2;
    return 4; // Default to 4 columns on large screens
  };

  // Function to open image in a new tab
  const handleImageClick = (imageUrl: string) => {
    window.open(imageUrl, '_blank');
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: "30px 16px", sm: "40px 24px", md: "60px 48px" },
        backgroundColor: "#ffcb13",
        width: "100%",
      }}
    >
      <Stack spacing={5.5} alignItems="center">
        <Box sx={{ maxWidth: 1189 }}>
          <Typography
            variant="h1"
            align="center"
            sx={{
              fontFamily: "var(--heading-font-family)",
              fontSize: "var(--heading-font-size)",
              fontWeight: "var(--heading-font-weight)",
              letterSpacing: "var(--heading-letter-spacing)",
              lineHeight: "var(--heading-line-height)",
              fontStyle: "var(--heading-font-style)",
              color: "text.primary",
              marginBottom: 2.5,
            }}
          >
            A PRIME OPPORTUNITY FOR EXHIBITORS
          </Typography>

          <Typography
            variant="body1"
            align="center"
            sx={{
              fontFamily: "var(--body-font-family)",
              fontSize: "var(--body-font-size)",
              fontWeight: "var(--body-font-weight)",
              letterSpacing: "var(--body-letter-spacing)",
              lineHeight: "var(--body-line-height)",
              fontStyle: "var(--body-font-style)",
              color: "text.primary",
            }}
          >
            Be a part of India's leading Crop Show in Chhattisgarh—a growing hub
            for progressive agriculture. With farmers from across the country
            attending, this is the ideal platform for seed companies, agri
            equipment manufacturers, agritech innovators, input suppliers, and
            polyhouse solution providers to showcase their products and connect
            directly with a focused farming audience. Whether you're launching a
            new product or looking to expand your market reach, this show offers
            unmatched exposure, high-quality leads, and the chance to position
            your brand at the center of India's agricultural growth. Don't miss
            the opportunity to grow your business where it matters most.
          </Typography>
        </Box>

        <Grid
          container
          spacing={3}
          justifyContent="center"
          sx={{ width: "100%" }}
        >
          {IMAGES.map((image, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={12 / getColumnCount()} 
              key={index}
              sx={{ 
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <ImageComponent 
                src={image.src} 
                alt={image.alt} 
                width={isExtraSmall ? "100%" : image.width} 
                height={image.height}
                onClick={() => handleImageClick(image.fullImage)}
              />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
};

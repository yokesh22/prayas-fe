import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export const ExhibitorsListSection = (): JSX.Element => {
  const sections = [
    {
      id: 1,
      backgroundColor: "#7a4f29",
      heading: "WELCOME TO FUTURE OF AGRICULTURE",
      content:
        "Step into the largest agricultural exhibition in Chattisgarh, where innovation meets tradition. Explore groundbreaking seed varieties, witness captivating live demonstrations, and discover the latest in agri-tech innovations from across the country. It's more than an exhibition—it's a celebration of progress in farming.",
      textColor: "white",
      gridSize: 5,
    },
    {
      id: 2,
      backgroundColor: "#ffcb13",
      heading: "A MUST-VISIT FOR EVERY FARMER",
      content:
        "Discover practical solutions to everyday challenges, explore live demos of modern machinery, know more about the latest innovations in seed varieties and connect with experts offering actionable advice. Whether you're a smallholder or a commercial grower, this exhibition empowers you with knowledge, products, and practices to boost productivity and profitability.",
      textColor: "text.primary",
      gridSize: 7,
    },
    {
      id: 3,
      backgroundColor: "#283c09",
      heading:
        "EXHIBITORS: SHOWCASE AND TALK TO YOUR POTENTIAL CUSTOMERS DIRECTLY",
      content:
        "This is your unparalleled platform to showcase your advancements and innovations directly to a targeted audience. Launch new products, generate quality leads, and build lasting relationships. This is your platform to be seen, heard, and trusted in one of the fastest-evolving sectors.",
      textColor: "white",
      gridSize: 7,
    },
  ];

  return (
    <Box width="100%"   sx={{backgroundColor: sections[0].backgroundColor}}>
      <Grid container spacing={4} sx={{ height: { xs: "auto", md: "650px" } }}>
        {/* Left section */}
        <Grid item xs={12} md={sections[0].gridSize} sx={{ height: "100%" }}>
          <Box
            sx={{
              backgroundColor: sections[0].backgroundColor,
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: { xs: 4, md: "40px 30px" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "37px",
                maxWidth: "400px",
              }}
            >
              <Typography
                variant="h1"
                color={sections[0].textColor}
                sx={{
                  fontFamily: "var(--heading-font-family)",
                  fontSize: { xs: "28px", md: "32px" },
                  fontWeight: "var(--heading-font-weight)",
                  letterSpacing: "var(--heading-letter-spacing)",
                  lineHeight: 1.2,
                  fontStyle: "var(--heading-font-style)",
                }}
              >
                {sections[0].heading}
              </Typography>
              <Typography
                variant="body1"
                color={sections[0].textColor}
                sx={{
                  fontFamily: "var(--body-font-family)",
                  fontSize: { xs: "14px", md: "16px" },
                  fontWeight: "var(--body-font-weight)",
                  letterSpacing: "var(--body-letter-spacing)",
                  lineHeight: 1.5,
                  fontStyle: "var(--body-font-style)",
                  overflow: "hidden",
                }}
              >
                {sections[0].content}
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Right column with two sections */}
        <Grid item xs={12} md={sections[1].gridSize} sx={{ height: "100%" }}>
          <Box
            sx={{ 
              display: "flex", 
              flexDirection: "column", 
              height: "100%" 
            }}
          >
            {/* Top right section */}
            <Box
              sx={{
                backgroundColor: sections[1].backgroundColor,
                padding: { xs: 4, md: "40px 30px" },
                height: "50%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "37px",
                  width: "100%", // Changed from maxWidth to width: 100%
                }}
              >
                <Typography
                  variant="h1"
                  color={sections[1].textColor}
                  sx={{
                    fontFamily: "var(--heading-font-family)",
                    fontSize: { xs: "28px", md: "32px" },
                    fontWeight: "var(--heading-font-weight)",
                    letterSpacing: "var(--heading-letter-spacing)",
                    lineHeight: 1.2,
                    fontStyle: "var(--heading-font-style)",
                  }}
                >
                  {sections[1].heading}
                </Typography>
                <Typography
                  variant="body1"
                  color={sections[1].textColor}
                  sx={{
                    fontFamily: "var(--body-font-family)",
                    fontSize: { xs: "14px", md: "16px" },
                    fontWeight: "var(--body-font-weight)",
                    letterSpacing: "var(--body-letter-spacing)",
                    lineHeight: 1.5,
                    fontStyle: "var(--body-font-style)",
                    overflow: "hidden",
                  }}
                >
                  {sections[1].content}
                </Typography>
              </Box>
            </Box>

            {/* Bottom right section */}
            <Box
              sx={{
                backgroundColor: sections[2].backgroundColor,
                padding: { xs: 4, md: "40px 30px" },
                height: "50%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "37px",
                  width: "100%", // Changed from maxWidth to width: 100%
                }}
              >
                <Typography
                  variant="h1"
                  color={sections[2].textColor}
                  sx={{
                    fontFamily: "var(--heading-font-family)",
                    fontSize: { xs: "24px", md: "28px" },
                    fontWeight: "var(--heading-font-weight)",
                    letterSpacing: "var(--heading-letter-spacing)",
                    lineHeight: 1.2,
                    fontStyle: "var(--heading-font-style)",
                  }}
                >
                  {sections[2].heading}
                </Typography>
                <Typography
                  variant="body1"
                  color={sections[2].textColor}
                  sx={{
                    fontFamily: "var(--body-font-family)",
                    fontSize: { xs: "14px", md: "16px" },
                    fontWeight: "var(--body-font-weight)",
                    letterSpacing: "var(--body-letter-spacing)",
                    lineHeight: 1.5,
                    fontStyle: "var(--body-font-style)",
                    overflow: "hidden",
                  }}
                >
                  {sections[2].content}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

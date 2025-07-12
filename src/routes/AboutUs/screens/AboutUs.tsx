import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { EventHighlightsSection } from "../../PrivacyPolicy/screens/sections/EventHighlightsSection";
import { VisitorDetailsSection } from "../../Registration/screens/sections/VisitorDetailsSection";

export const AboutUs = (): JSX.Element => {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <EventHighlightsSection />

      <Box
        sx={{
          bgcolor: "background.paper",
          py: 2.5,
          width: "100%",
          flex: 1,
          position:"relative",
          top:"150px"
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={1} alignItems="center">
            <Typography
              variant="h4"
              component="h1"
              align="center"
              sx={{ 
                fontWeight: "bold",
                textTransform: "uppercase",
                color: "primary.main",
              }}
            >
              ABOUT CHAWDA BAGH NURSERY
            </Typography>

            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 4, md: 9 }}
              alignItems="center"
            >
              <Box
                component="img"
                src="https://c.animaapp.com/JdgpojVL/img/logo-1@2x.png"
                alt="Chawda Bagh Nursery Logo"
                sx={{
                  width: 347,
                  height: 347,
                  objectFit: "cover",
                }}
              />

              <Typography
                variant="body1"
                sx={{
                  maxWidth: 674,
                  color: "text.primary",
                  fontSize: "16px",
                  lineHeight: 1.5,
                }}
              >
                CB Nursery, a part of the historic Chawda Bagh (est. 1952), began
                with a commitment to improving farm productivity through
                innovation. What started as a nursery for our own farms quickly
                gained attention for the quality of our plants. As demand from
                fellow farmers grew, CB Nursery formally began operations in
                2012–13.
                <br />
                <br />
                Today, we are proud to be Central India&apos;s first private
                nursery with an automatic seeding line. Spanning over 30 acres
                across 3 states, our insect-proof, climate-controlled polyhouses
                deliver healthy, high-quality planting material using advanced
                agri-tech solutions.
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box sx={{ mt: "auto" }}>
        <VisitorDetailsSection />
      </Box>
    </Box>
  );
};
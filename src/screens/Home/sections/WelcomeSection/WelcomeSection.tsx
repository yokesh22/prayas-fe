import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

export const WelcomeSection = (): JSX.Element => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        py: 7.5,
        width: "100%",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={6} alignItems="center">
          <Typography
            variant="h1"
            align="center"
            color="text.primary"
            sx={{
              fontFamily: "var(--heading-font-family)",
              fontSize: "var(--heading-font-size)",
              fontWeight: "var(--heading-font-weight)",
              letterSpacing: "var(--heading-letter-spacing)",
              lineHeight: "var(--heading-line-height)",
              fontStyle: "var(--heading-font-style)",
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
              alt="Logo"
              sx={{
                width: 347,
                height: 347,
                objectFit: "cover",
              }}
            />

            <Typography
              sx={{
                maxWidth: 674,
                fontFamily: "var(--body-font-family)",
                fontSize: "var(--body-font-size)",
                fontWeight: "var(--body-font-weight)",
                letterSpacing: "var(--body-letter-spacing)",
                lineHeight: "var(--body-line-height)",
                fontStyle: "var(--body-font-style)",
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
  );
};

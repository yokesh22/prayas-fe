import { Box, Container, Grid, Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import React from "react";

// Data for links section
const links = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Visiting", href: "/registration" },
  { text: "Exhibit", href: "/exhibitors" },
  { text: "Terms & Conditions", href: "/terms-conditions" },
  { text: "Privacy Policy", href: "/privacy-policy" },
];

// Data for social media icons
const socialIcons = [
  {
    alt: "Linkedin round",
    src: "https://c.animaapp.com/mcwvg0grSIsRNR/img/linkedin-round-svgrepo-com.svg",
  },
  {
    alt: "Facebook svgrepo com",
    src: "https://c.animaapp.com/mcwvg0grSIsRNR/img/facebook-svgrepo-com.svg",
  },
  {
    alt: "Instagram with",
    src: "https://c.animaapp.com/mcwvg0grSIsRNR/img/instagram-with-circle-svgrepo-com.svg",
  },
  {
    alt: "Twitter",
    backgroundImage:
      "url(https://c.animaapp.com/mcwvg0grSIsRNR/img/group-1.png)",
  },
];

export const EventOverviewSection = (): JSX.Element => {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        py: 3.75,
        px: 10,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={10}>
          {/* Venue & Timing */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h4"
              sx={{
                color: "warning.main",
                fontWeight: 800,
                mb: 1.5,
                fontFamily: "'Funnel Sans', Helvetica",
              }}
            >
              VENUE &amp; TIMING
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Chawda Bagh, Nandanvan Road, Chandanidih,
              <br />
              Tatibandh Raipur (C.G.) Pin – 492099
              <br />
              <br />
              Date: 28th | 29th | 30th November
              <br />
              Time : 10am to 6pm
            </Typography>
          </Grid>

          {/* Links */}
          <Grid item xs={12} md={2}>
            <Typography
              variant="h4"
              sx={{
                color: "warning.main",
                fontWeight: 800,
                mb: 1.5,
                fontFamily: "'Funnel Sans', Helvetica",
              }}
            >
              LINKS
            </Typography>
            <Stack spacing={1}>
              {links.map((link, index) => (
                <Link
                  key={index}
                  component={RouterLink}
                  to={link.href}
                  underline="none"
                  color="text.secondary"
                  sx={{
                    typography: "body1",
                    "&:hover": { color: "warning.main" },
                  }}
                >
                  {link.text}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Contact Details */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h4"
              sx={{
                color: "warning.main",
                fontWeight: 800,
                mb: 1.5,
                fontFamily: "'Funnel Sans', Helvetica",
              }}
            >
              CONTACT DETAILS
            </Typography>
            <Typography variant="body1" color="text.secondary">
              +917974493573
            </Typography>
            <Typography variant="body1" color="text.secondary">
              cbinternational91@gmail.com
            </Typography>
          </Grid>

          {/* Social */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h4"
              sx={{
                color: "warning.main",
                fontWeight: 800,
                mb: 1.5,
                fontFamily: "'Funnel Sans', Helvetica",
              }}
            >
              SOCIAL
            </Typography>
            <Stack direction="row" spacing={1.5}>
              {socialIcons.map((icon, index) => (
                <Box
                  key={index}
                  component={icon.src ? "img" : "div"}
                  src={icon.src}
                  alt={icon.alt}
                  sx={{
                    width: 36,
                    height: 36,
                    backgroundImage: icon.backgroundImage,
                    backgroundSize: "100% 100%",
                    cursor: "pointer",
                  }}
                />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

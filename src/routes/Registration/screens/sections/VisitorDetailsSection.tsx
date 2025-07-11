import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Grid, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

// Data for links section
const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Visiting", path: "/registration" },
  { name: "Exhibit", path: "/exhibitors" },
  { name: "Terms & Conditions", path: "/terms-conditions" },
  { name: "Privacy Policy", path: "/privacy-policy" },
];

// Data for social media icons
const socialIcons = [
  { icon: <LinkedInIcon />, alt: "LinkedIn" },
  { icon: <FacebookIcon />, alt: "Facebook" },
  { icon: <InstagramIcon />, alt: "Instagram" },
  { icon: <YouTubeIcon />, alt: "YouTube" },
];

export const VisitorDetailsSection = (): JSX.Element => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        padding: { xs: 2, md: 4 },
        paddingY: "30px",
        bgcolor: "#283c09",
      }}
    >
      <Grid container spacing={4}>
        {/* VENUE & TIMING */}
        <Grid item xs={12} md={3}>
          <Stack spacing={1.5}>
            <Typography
              variant="h4"
              sx={{
                color: "secondary.main",
                fontWeight: 800,
                fontSize: "18px",
              }}
            >
              VENUE &amp; TIMING
            </Typography>
            <Typography variant="body1" color="white">
              Chawda Bagh, Nandanvan Road, Chandanidih,
              <br />
              Tatibandh Raipur (C.G.) Pin – 492099
              <br />
              <br />
              Date: 28th | 29th | 30th November
              <br />
              Time : 10am to 6pm
            </Typography>
          </Stack>
        </Grid>

        {/* LINKS */}
        <Grid item xs={12} md={3}>
          <Stack spacing={1}>
            <Typography
              variant="h4"
              sx={{
                color: "secondary.main",
                fontWeight: 800,
                fontSize: "18px",
              }}
            >
              LINKS
            </Typography>
            {links.map((link, index) => (
              <RouterLink
                key={index}
                to={link.path}
                style={{ textDecoration: 'none' }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "16px",
                    lineHeight: "24px",
                    cursor: "pointer",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  {link.name}
                </Typography>
              </RouterLink>
            ))}
          </Stack>
        </Grid>

        {/* CONTACT DETAILS */}
        <Grid item xs={12} md={3}>
          <Stack spacing={1}>
            <Typography
              variant="h4"
              sx={{
                color: "secondary.main",
                fontWeight: 800,
                fontSize: "18px",
              }}
            >
              CONTACT DETAILS
            </Typography>
            <Typography variant="body1" color="white">
              +917974493573
            </Typography>
            <Typography variant="body1" color="white">
              cbinternational91@gmail.com
            </Typography>
          </Stack>
        </Grid>

        {/* SOCIAL */}
        <Grid item xs={12} md={3}>
          <Stack spacing={1.5}>
            <Typography
              variant="h4"
              sx={{
                color: "secondary.main",
                fontWeight: 800,
                fontSize: "18px",
              }}
            >
              SOCIAL
            </Typography>
            <Stack direction="row" spacing={1.5}>
              {socialIcons.map((item, index) => (
                <Link
                  key={index}
                  href="#"
                  sx={{
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "36px",
                    height: "36px",
                  }}
                >
                  {item.icon}
                </Link>
              ))}
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

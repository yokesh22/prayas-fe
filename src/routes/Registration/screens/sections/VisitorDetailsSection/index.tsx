import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Container, Grid, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

// Data for links section
const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/" },
  { name: "Visiting", path: "/" },
  { name: "Exhibit", path: "/exhibitors" },
  { name: "Contact", path: "/" },
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
    <Box sx={{ bgcolor: "#283c09", py: 3.75, px: { xs: 2, md: 10 } }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* VENUE & TIMING */}
          <Grid item xs={12} md={3}>
            <Stack spacing={1.5}>
              <Typography
                variant="subtitle2"
                sx={{ color: "secondary.main", fontSize: "18px" }}
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
            <Stack spacing={1.5}>
              <Typography
                variant="subtitle2"
                sx={{ color: "secondary.main", fontSize: "18px" }}
              >
                LINKS
              </Typography>
              <Stack spacing={1}>
                {links.map((link, index) => (
                  <RouterLink
                    key={index}
                    to={link.path}
                    style={{ textDecoration: 'none' }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: "white",
                        textAlign: "left",
                        width: "fit-content",
                        fontSize: "16px",
                        lineHeight: "24px",
                        cursor: "pointer",
                      }}
                    >
                      {link.name}
                    </Typography>
                  </RouterLink>
                ))}
              </Stack>
            </Stack>
          </Grid>

          {/* CONTACT DETAILS */}
          <Grid item xs={12} md={3}>
            <Stack spacing={1.5}>
              <Typography
                variant="subtitle2"
                sx={{ color: "secondary.main", fontSize: "18px" }}
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
                variant="subtitle2"
                sx={{ color: "secondary.main", fontSize: "18px" }}
              >
                SOCIAL
              </Typography>
              <Stack direction="row" spacing={1.5}>
                {socialIcons.map((item, index) => (
                  <Link
                    key={index}
                    component="button"
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
      </Container>
    </Box>
  );
};

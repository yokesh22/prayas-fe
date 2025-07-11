import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Container, Grid, Link, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

export const FooterSection = (): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Navigation links data with router paths
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Visiting", path: "/registration" },
    { name: "Exhibit", path: "/exhibitors" },
    { name: "Terms & Conditions", path: "/terms-conditions" },
    { name: "Privacy Policy", path: "/privacy-policy" },
  ];

  // Social media icons data
  const socialIcons = [
    { icon: <LinkedInIcon fontSize="large" />, alt: "LinkedIn" },
    { icon: <FacebookIcon fontSize="large" />, alt: "Facebook" },
    { icon: <InstagramIcon fontSize="large" />, alt: "Instagram" },
    { icon: <YouTubeIcon fontSize="large" />, alt: "YouTube" },
  ];

  // Mobile footer component
  const FooterMobile = () => {
    // Navigation links data
    const navLinks = [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Visiting", path: "/registration" },
      { name: "Exhibit", path: "/exhibitors" },
      { name: "Terms & Conditions", path: "/terms-conditions" },
      { name: "Privacy Policy", path: "/privacy-policy" },
    ];

    // Contact details data
    const contactDetails = ["+917974493573", "cbinternational91@gmail.com"];

    return (
      <Box
        component="footer"
        sx={{
          bgcolor: "#283c09",
          py: 5,
          px: { xs: 2, sm: 5 },
          color: "white",
          width: "100%",
        }}
      >
        <Container maxWidth="sm">
          <Stack spacing={3.5}>
            {/* Venue & Timing Section */}
            <Stack spacing={1.5}>
              <Typography
                variant="h6"
                fontWeight="800"
                sx={{ color: "#ffcb13", textTransform: "uppercase" }}
              >
                Venue &amp; Timing
              </Typography>
              <Typography variant="body1">
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

            {/* Links Section */}
            <Stack spacing={1.5}>
              <Typography
                variant="h6"
                fontWeight="800"
                sx={{ color: "#ffcb13", textTransform: "uppercase" }}
              >
                Links
              </Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap">
                {navLinks.map((link, index) => (
                  <RouterLink
                    key={index}
                    to={link.path}
                    style={{ textDecoration: 'none' }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: "white",
                        "&:hover": { color: "#ffcb13" },
                        marginBottom: 1,
                      }}
                    >
                      {link.name}
                    </Typography>
                  </RouterLink>
                ))}
              </Stack>
            </Stack>

            {/* Contact Details Section */}
            <Stack spacing={1.5}>
              <Typography
                variant="h6"
                fontWeight="800"
                sx={{ color: "#ffcb13", textTransform: "uppercase" }}
              >
                Contact Details
              </Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap">
                {contactDetails.map((detail, index) => (
                  <Typography key={index} variant="body1">
                    {detail}
                  </Typography>
                ))}
              </Stack>
            </Stack>

            {/* Social Media Section */}
            <Stack spacing={1.5}>
              <Typography
                variant="h6"
                fontWeight="800"
                sx={{ color: "#ffcb13", textTransform: "uppercase" }}
              >
                Social
              </Typography>
              <Stack direction="row" spacing={1.5}>
                {socialIcons.map((item, index) => (
                  <Box
                    key={index}
                    component="a"
                    href="#"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      bgcolor: "white",
                      color: "#283c09",
                      "&:hover": {
                        opacity: 0.8,
                      },
                    }}
                    aria-label={item.alt}
                  >
                    {item.icon}
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
    );
  };

  // Desktop footer component
  const FooterDesktop = () => {
    return (
      <Box
        sx={{
          bgcolor: "#283c09",
          py: 3.75,
          px: { xs: 2, sm: 5, md: 10 },
          width: "100%",
          marginTop: "auto",
          position: "relative",
          bottom: 0,
        }}
      >
        <Container maxWidth="lg" disableGutters>
          <Grid container spacing={{ xs: 4, md: 10 }}>
            {/* VENUE & TIMING */}
            <Grid item xs={12} md={3}>
              <Stack spacing={1.5}>
                <Box sx={{ height: "23px" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 800,
                      color: "#ffcb13",
                      fontSize: "18px",
                      lineHeight: "normal",
                    }}
                  >
                    VENUE &amp; TIMING
                  </Typography>
                </Box>
                <Box sx={{ width: 324, height: 144 }}>
                  <Typography
                    variant="body1"
                    color="white"
                    sx={{
                      width: 324,
                    }}
                  >
                    Chawda Bagh, Nandanvan Road, Chandanidih,
                    <br />
                    Tatibandh Raipur (C.G.) Pin – 492099
                    <br />
                    <br />
                    Date: 28th | 29th | 30th November
                    <br />
                    Time : 10am to 6pm
                  </Typography>
                </Box>
              </Stack>
            </Grid>

            {/* LINKS */}
            <Grid item xs={12} md={2}>
              <Stack spacing={1.5}>
                <Box sx={{ width: "52px", height: "23px" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 800,
                      color: "#ffcb13",
                      fontSize: "18px",
                      lineHeight: "normal",
                    }}
                  >
                    LINKS
                  </Typography>
                </Box>
                {links.map((link, index) => (
                  <Box key={index} sx={{ height: "24px" }}>
                    <RouterLink
                      to={link.path}
                      style={{ textDecoration: 'none' }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          color: "white",
                          "&:hover": { color: "#ffcb13" },
                          whiteSpace: "nowrap",
                          fontFamily: "var(--body-font-family)",
                          fontSize: "var(--body-font-size)",
                          fontWeight: "var(--body-font-weight)",
                          letterSpacing: "var(--body-letter-spacing)",
                          lineHeight: "var(--body-line-height)",
                          fontStyle: "var(--body-font-style)",
                        }}
                      >
                        {link.name}
                      </Typography>
                    </RouterLink>
                  </Box>
                ))}
              </Stack>
            </Grid>

            {/* CONTACT DETAILS */}
            <Grid item xs={12} md={3}>
              <Stack spacing={1.5}>
                <Box sx={{ height: "23px" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 800,
                      color: "#ffcb13",
                      fontSize: "18px",
                      lineHeight: "normal",
                    }}
                  >
                    CONTACT DETAILS
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  color="white"
                  sx={{ whiteSpace: "nowrap" }}
                >
                  +917974493573
                </Typography>
                <Typography
                  variant="body1"
                  color="white"
                  sx={{ whiteSpace: "nowrap" }}
                >
                  cbinternational91@gmail.com
                </Typography>
              </Stack>
            </Grid>

            {/* SOCIAL */}
            <Grid item xs={12} md={3}>
              <Stack spacing={1.5}>
                <Box sx={{ height: "23px" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 800,
                      color: "#ffcb13",
                      fontSize: "18px",
                      lineHeight: "normal",
                    }}
                  >
                    SOCIAL
                  </Typography>
                </Box>
                <Stack direction="row" spacing={1.5}>
                  {socialIcons.map((item, index) => (
                    <Link
                      key={index}
                      href="#"
                      sx={{
                        color: "white",
                        "&:hover": { color: "#ffcb13" },
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

  return isMobile ? <FooterMobile /> : <FooterDesktop />;
};

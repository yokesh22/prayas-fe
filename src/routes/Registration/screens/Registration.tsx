import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { AppBar, Box, Container, IconButton, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { PriceDetailsSection } from "./sections/PriceDetailsSection";
import { RegistrationHeaderSection } from "./sections/RegistrationHeaderSection";
import { VisitorDetailsSection } from "./sections/VisitorDetailsSection";

export const Registration = (): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Mobile registration component
  const MobileRegistration = () => {
    return (
      <Box
        sx={{
          bgcolor: "background.paper",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Container
          disableGutters
          maxWidth="xs"
          sx={{ position: "relative", bgcolor: "background.paper" }}
        >
          {/* Top App Bar */}
          <AppBar
            position="static"
            color="transparent"
            elevation={0}
            sx={{ borderBottom: "0.4px solid #967353" }}
          >
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                component={Link}
                to="/"
                sx={{ mr: 1 }}
              >
                <ArrowBackIcon />
              </IconButton>
              <Box
                component="img"
                src="https://c.animaapp.com/JdgpojVL/img/group-12.svg"
                alt="Prayaas Logo"
                sx={{ height: 42 }}
              />
            </Toolbar>
          </AppBar>

          {/* Registration Title Banner */}
          <Box
            component="header"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: { xs: "2rem 1rem", sm: "3rem 1.5rem", md: "3.5rem 2rem" },
              background: "rgba(69, 132, 59, 0.8)",
              backgroundImage:
                "linear-gradient(0deg, rgba(69, 132, 59, 0.8) 0%, rgba(69, 132, 59, 0.8) 100%)",
              width: "100%",
              minHeight: { xs: "120px", sm: "150px" },
              boxSizing: "border-box",
            }}
          >
            <Typography
              variant="h4"
              component="h1"
              sx={{
                fontWeight: "bold",
                color: "white",
                fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" },
                textAlign: "center",
                fontFamily: "'Funnel Sans', Helvetica, Arial, sans-serif",
                maxWidth: "90%",
                wordBreak: "break-word",
                hyphens: "auto",
              }}
            >
              REGISTRATION
            </Typography>
          </Box>

          {/* Main Content Sections */}
          <Box sx={{ width: "100%", p: 2 }}>
            <PriceDetailsSection />
            <Box sx={{ mt: 4 }}>
              <VisitorDetailsSection />
            </Box>
          </Box>
        </Container>
      </Box>
    );
  };

  // Desktop registration component
  const DesktopRegistration = () => {
    return (
      <Box
      sx={{
        bgcolor: "background.default",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          bgcolor: "background.default",
          overflow: "hidden",
          width: "100%",
          position: "relative",
        }}
      >
        <Box sx={{ width: "90%", position: "relative" }}>
          <Box
            sx={{ width: "100%", borderBottom: 1, borderColor: "info.main" }}
          >
            <RegistrationHeaderSection />
          </Box>

          <PriceDetailsSection />
          <VisitorDetailsSection />
        </Box>
      </Container>
    </Box>
    );
  };

  return isMobile ? <MobileRegistration /> : <DesktopRegistration />;
};

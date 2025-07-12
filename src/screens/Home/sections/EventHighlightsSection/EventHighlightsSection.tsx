import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LanguageSelector } from "../../../../components/LanguageSelector";
import { MobileMenu } from "../../../../components/MobileMenu";

// Navigation menu items data
const navItems = [
  { name: "HOME", active: true, path: "/" },
  { name: "EXHIBITORS", active: false, path: "/exhibitors" },
];

// Mobile header component
const HeaderMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: "white",
        height: 60,
        borderBottom: "0.4px solid #967353",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: 1, py: 0.5 }}>
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <IconButton 
            edge="start" 
            color="inherit" 
            aria-label="menu"
            onClick={handleMenuClick}
          >
            {/* Use inline SVG instead of MUI icon to avoid context issues */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </IconButton>

          <Link to="/">
            <Box
              component="img"
              src="https://c.animaapp.com/JdgpojVL/img/group-12.svg"
              alt="Prayas Logo"
              sx={{ height: 42 }}
            />
          </Link>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={2} sx={{ pl: 1 }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            {/* Use inline SVG instead of MUI icon to avoid context issues */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#12462d" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 600,
                color: "#12462d",
                lineHeight: "0.75rem",
                fontSize: "0.75rem",
                textAlign: "center",
              }}
            >
              28–30 Nov
              <br />
              Raipur
            </Typography>
          </Stack>

          <Button
            variant="contained"
            component={Link}
            to="/registration"
            sx={{
              bgcolor: "#ffcb13",
              color: "#12462d",
              fontWeight: 700,
              fontSize: 12,
              borderRadius: 2,
              "&:hover": {
                bgcolor: "#e6b700",
              },
            }}
          >
            REGISTER
          </Button>
        </Stack>
      </Toolbar>
      
      {/* Mobile menu drawer */}
      <MobileMenu navItems={navItems} open={menuOpen} onClose={() => setMenuOpen(false)} />
    </AppBar>
  );
};

// Desktop header component
const HeaderDesktop = () => {
  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={4}
      sx={{
        borderBottom: "1px solid",
        borderColor: "custom.darkBrown",
        py: 1.5,
        px: 2.25,
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "white",
      }}
    >
      <Container maxWidth={false} disableGutters>
        <Toolbar 
          disableGutters 
          sx={{ 
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Box
              component="img"
              src="https://c.animaapp.com/JdgpojVL/img/group-12.svg"
              alt="Logo"
              sx={{ 
                width: 240.25, 
                height: 81
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <Stack 
            direction="row" 
            alignItems="center" 
            spacing={4.25}
          >
            {/* Navigation Menu */}
            <Stack direction="row" spacing={2} mr={4} alignItems="center"  >
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  style={{ textDecoration: 'none', color: 'inherit' }} >
                  <Stack
                    direction="column"
                    alignItems="center"
                    spacing={0.5}
                    paddingTop={1.25}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: "'Funnel_Sans', Helvetica",
                        fontSize: "22px",
                        fontWeight: item.active ? "bold" : "normal",
                        textAlign: "center",
                        height: "100%",                 
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Box
                      sx={{
                        width: item.active ? "100%" : "1px",
                        height: "6px",
                        bgcolor: "secondary.main",
                      }}
                    />
                  </Stack>
                </Link>
              ))}
            </Stack>

            {/* Event Date and Register Button */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                border: "1px solid",
                borderColor: "primary.main",
                borderRadius: "8px",
                px: 2.5,
                py: 1.25,
                gap: 2,
              }}
            >
              <Stack direction="row" alignItems="center" spacing={0.875}>
                <LocationOnIcon
                  sx={{
                    color: "primary.main",
                    width: 16.11,
                    height: 16.11,
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: "'Funnel_Sans', Helvetica",
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "primary.main",
                    whiteSpace: "nowrap",
                  }}
                >
                  28–30 Nov 25, Raipur
                </Typography>
              </Stack>

              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/registration"
                sx={{
                  bgcolor: "secondary.main",
                  color: "primary.main",
                  fontFamily: "'Funnel_Sans', Helvetica",
                  fontWeight: "bold",
                  fontSize: "16px",
                  lineHeight: "21.8px",
                  borderRadius: "8px",
                  py: 0.625,
                  px: 1.875,
                  whiteSpace: "nowrap",
                  textDecoration: "none",
                }}
              >
                REGISTER NOW
              </Button>
            </Box>

            {/* Language Selector */}
            <LanguageSelector />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export const EventHighlightsSection = (): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
};
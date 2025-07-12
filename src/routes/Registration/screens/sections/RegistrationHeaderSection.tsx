import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  AppBar,
  Box,
  Container,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { LanguageSelector } from "../../../../components/LanguageSelector";
import { MobileMenu } from "../../../../components/MobileMenu";

// Navigation menu items data
const navItems = [
  { name: "HOME", active: false, path: "/" },
  { name: "EXHIBITORS", active: false, path: "/exhibitors" },
];

export const RegistrationHeaderSection = (): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{
        bgcolor: "background.default",
        borderBottom: 1,
        borderColor: "primary.main",
        py: { xs: 1, md: 1.5 },
        px: { xs: 1, md: 2.25 },
      }}
    >
      <Container maxWidth={false} disableGutters>
        <Toolbar 
          disableGutters 
          sx={{ 
            justifyContent: "space-between",
            flexDirection: "row",
            py: { xs: 1, sm: 0 }
          }}
        >
          {/* Logo */}
          <Link to="/">
            <Box
              component="img"
              src="https://c.animaapp.com/JdgpojVL/img/group-12.svg"
              alt="Logo"
              sx={{ 
                width: { xs: 180, sm: 240.25 }, 
                height: { xs: 60, sm: 81 }
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <Stack 
            direction="row" 
            alignItems="center" 
            spacing={{ xs: 4, md: 2.25 }}
            sx={{ display: { xs: 'none', md: 'flex' } }}
          >
            {/* Navigation Menu */}
            <Stack direction="row" spacing={2} mr={4} alignItems="center" >
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
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

            {/* Event Date */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                border: "1px solid",
                borderColor: "primary.main",
                borderRadius: "8px",
                px: 2.5,
                py: 1.25,
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
            </Box>

            {/* Language Selector */}
            <LanguageSelector />
          </Stack>

          {/* Mobile Navigation */}
          <Stack 
            direction="row" 
            alignItems="center" 
            spacing={1}
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            {/* Language Selector - Mobile */}
            <LanguageSelector />
            
            {/* Mobile Menu */}
            <MobileMenu navItems={navItems} />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
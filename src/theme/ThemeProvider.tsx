import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material";
import React from "react";

const appTheme = createTheme({
  palette: {
    primary: {
      main: "#12462d", // Dark green from header and buttons
    },
    secondary: {
      main: "#ffcb13", // Yellow from buttons and highlights
    },
    error: {
      main: "#ff0000",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: "#000000",
      secondary: "#ffffff",
    },
    // Custom colors from the design
    custom: {
      darkGreen: "#12462d",
      yellow: "#ffcb13",
      brown: "#7a4f29",
      darkBrown: "#967353",
      oliveGreen: "#283c09",
      lightGreen: "#383f2b",
    },
  },
  typography: {
    fontFamily: "'Funnel Sans', Helvetica, Arial, sans-serif",
    h1: {
      fontFamily: "var(--heading-font-family)",
      fontSize: "40px",
      fontWeight: 300,
      letterSpacing: "0px",
      lineHeight: "normal",
    },
    h2: {
      fontFamily: "var(--subheading-font-family)",
      fontSize: "22px",
      fontWeight: 800,
      letterSpacing: "0px",
      lineHeight: "normal",
    },
    body1: {
      fontFamily: "var(--body-font-family)",
      fontSize: "16px",
      fontWeight: 400,
      letterSpacing: "0px",
      lineHeight: "24px",
    },
    button: {
      fontWeight: 700,
      textTransform: "uppercase",
    },
    subtitle1: {
      fontSize: "18px",
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
          padding: "5px 15px",
        },
        containedPrimary: {
          backgroundColor: "#ffcb13",
          color: "#12462d",
          "&:hover": {
            backgroundColor: "#e0b311",
          },
        },
        outlinedPrimary: {
          borderColor: "#ffcb13",
          color: "#ffcb13",
          "&:hover": {
            borderColor: "#e0b311",
            backgroundColor: "rgba(255, 203, 19, 0.04)",
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        ":root": {
          "--body-font-family": "'Funnel Sans', Helvetica",
          "--body-font-size": "16px",
          "--body-font-style": "normal",
          "--body-font-weight": "400",
          "--body-letter-spacing": "0px",
          "--body-line-height": "24px",
          "--heading-font-family": "'Funnel Sans', Helvetica",
          "--heading-font-size": "40px",
          "--heading-font-style": "normal",
          "--heading-font-weight": "300",
          "--heading-letter-spacing": "0px",
          "--heading-line-height": "normal",
          "--subheading-font-family": "'Funnel Sans', Helvetica",
          "--subheading-font-size": "22px",
          "--subheading-font-style": "normal",
          "--subheading-font-weight": "800",
          "--subheading-letter-spacing": "0px",
          "--subheading-line-height": "normal",
          "--variable-collection-content-dark": "rgba(0, 0, 0, 1)",
          "--variable-collection-content-light": "rgba(255, 255, 255, 1)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          color: "#000000",
          borderBottom: "1px solid #967353",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: ({ theme }) => ({
          paddingLeft: theme.spacing(10),
          paddingRight: theme.spacing(10),
        }),
      },
    },
  },
});

export const ThemeProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={appTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

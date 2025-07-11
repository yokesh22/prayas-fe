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
      fontSize: "40px",
      fontWeight: 300,
      letterSpacing: "0px",
      lineHeight: "normal",
    },
    h2: {
      fontSize: "32px",
      fontWeight: 700,
      letterSpacing: "0px",
      lineHeight: "normal",
    },
    h3: {
      fontSize: "22px",
      fontWeight: 700,
      letterSpacing: "0px",
      lineHeight: "normal",
    },
    h4: {
      fontSize: "18px",
      fontWeight: 700,
      letterSpacing: "0px",
      lineHeight: "normal",
    },
    subtitle1: {
      fontSize: "18px",
      fontWeight: 600,
      letterSpacing: "0px",
      lineHeight: "normal",
    },
    body1: {
      fontSize: "16px",
      fontWeight: 400,
      letterSpacing: "0px",
      lineHeight: "24px",
    },
    body2: {
      fontSize: "16px",
      fontWeight: 700,
      letterSpacing: "0px",
      lineHeight: "24px",
    },
    button: {
      fontSize: "16px",
      fontWeight: 700,
      letterSpacing: "0px",
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "8px",
        },
        containedPrimary: {
          backgroundColor: "#FFCB13",
          color: "#12462D",
          "&:hover": {
            backgroundColor: "#E0B311",
          },
        },
        outlinedPrimary: {
          borderColor: "#FFCB13",
          color: "#FFCB13",
          "&:hover": {
            borderColor: "#E0B311",
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: "#967353",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          color: "#000000",
        },
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

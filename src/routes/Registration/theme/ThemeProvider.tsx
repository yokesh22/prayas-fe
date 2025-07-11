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
      main: "#ff0000", // Red color from required field indicators
    },
    background: {
      default: "#ffffff",
      paper: "#f2f2f2", // Light gray background for price details section
    },
    text: {
      primary: "#1e1e1e", // Dark text color
      secondary: "#ffffff", // White text color
    },
    divider: "#d9d9d9", // Border color
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
    fontFamily: "'Funnel Sans', Helvetica",
    h1: {
      fontSize: "40px",
      fontWeight: 300,
      lineHeight: "normal",
      letterSpacing: "0px",
    },
    h2: {
      fontSize: "24px",
      fontWeight: 600,
      lineHeight: "28.8px",
      letterSpacing: "-0.48px",
    },
    h3: {
      fontSize: "22px",
      fontWeight: 400,
      lineHeight: "26.4px",
      letterSpacing: "-0.44px",
    },
    h4: {
      fontSize: "18px",
      fontWeight: 800, // extrabold
      lineHeight: "normal",
      letterSpacing: "0px",
    },
    h5: {
      fontSize: "24px",
      fontWeight: 600,
      lineHeight: "28.8px",
      letterSpacing: "-0.48px",
    },
    body1: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
      letterSpacing: "0px",
    },
    body2: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "22.4px",
      letterSpacing: "0px",
    },
    button: {
      fontSize: "18px",
      fontWeight: 700,
      lineHeight: "21.8px",
      letterSpacing: "0px",
      textTransform: "uppercase",
    },
    subtitle1: {
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "24px",
      letterSpacing: "0px",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "8px",
          padding: "20px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        containedPrimary: {
          backgroundColor: "#FFCB13",
          color: "#12462D",
          "&:hover": {
            backgroundColor: "#E5B700",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
            "& fieldset": {
              borderColor: "#D9D9D9",
            },
            "&:hover fieldset": {
              borderColor: "#006731",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#006731",
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          border: "1px solid #D9D9D9",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#006731",
          "&.Mui-checked": {
            color: "#006731",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#D9D9D9",
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#FFFFFF",
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

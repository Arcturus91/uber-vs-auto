"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#030712", // gray-950
      paper: "#111827", // gray-900
    },
    text: {
      primary: "#f3f4f6", // gray-100
      secondary: "#9ca3af", // gray-400
    },
    primary: {
      main: "#3b82f6", // blue-500
    },
    secondary: {
      main: "#eab308", // yellow-500
    },
  },
  typography: {
    fontFamily: "inherit",
  },
  components: {
    MuiSlider: {
      styleOverrides: {
        root: {
          height: 6,
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#6b7280",
          "&.Mui-checked": {
            color: "#3b82f6",
          },
        },
      },
    },
  },
});

export default theme;

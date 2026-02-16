"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0B0F1A",
      paper: "#111827",
    },
    text: {
      primary: "#E8ECF4",
      secondary: "#8896AB",
    },
    primary: {
      main: "#0EA5E9",
      light: "#38BDF8",
      dark: "#0284C7",
    },
    secondary: {
      main: "#FACC15",
      light: "#FDE68A",
      dark: "#CA8A04",
    },
    success: {
      main: "#22C55E",
      light: "#4ADE80",
      dark: "#16A34A",
    },
    error: {
      main: "#EF4444",
      light: "#F87171",
      dark: "#DC2626",
    },
  },
  typography: {
    fontFamily: "var(--font-inter), sans-serif",
    h1: {
      fontWeight: 700,
      letterSpacing: "-0.025em",
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.025em",
    },
    h3: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiSlider: {
      styleOverrides: {
        root: {
          height: 6,
          "& .MuiSlider-thumb": {
            width: 18,
            height: 18,
            "&:hover, &.Mui-focusVisible": {
              boxShadow: "0 0 0 8px rgba(14, 165, 233, 0.16)",
            },
          },
          "& .MuiSlider-track": {
            border: "none",
          },
          "& .MuiSlider-rail": {
            backgroundColor: "#1E293B",
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#334155",
          "&.Mui-checked": {
            color: "#0EA5E9",
          },
        },
      },
    },
  },
});

export default theme;

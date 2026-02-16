import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  important: "#__next",
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        surface: {
          DEFAULT: "#0B0F1A",
          card: "#111827",
          elevated: "#1A2235",
          border: "#1E293B",
        },
        uber: {
          DEFAULT: "#FACC15",
          muted: "#CA8A04",
          bg: "rgba(250, 204, 21, 0.08)",
          border: "rgba(250, 204, 21, 0.15)",
        },
        car: {
          DEFAULT: "#0EA5E9",
          muted: "#0284C7",
          bg: "rgba(14, 165, 233, 0.08)",
          border: "rgba(14, 165, 233, 0.15)",
        },
        positive: {
          DEFAULT: "#22C55E",
          bg: "rgba(34, 197, 94, 0.08)",
          border: "rgba(34, 197, 94, 0.2)",
        },
        negative: {
          DEFAULT: "#EF4444",
          bg: "rgba(239, 68, 68, 0.08)",
          border: "rgba(239, 68, 68, 0.2)",
        },
      },
    },
  },
  plugins: [],
};

export default config;

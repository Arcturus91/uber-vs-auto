import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B0F1A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Uber vs Auto Propio | Calculadora Lima 2026",
  description:
    "Compara el costo real de tener auto propio vs usar Uber en Lima. Calculadora interactiva con prestamo, combustible, seguro, depreciacion y mas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body id="__next" className="font-sans">
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

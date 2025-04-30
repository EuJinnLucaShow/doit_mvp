import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme/theme";
import StoreProvider from "@/app/StoreProvider";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import AppBarHeader from "@/components/AppBarHeader";
import Copyright from "@/components/Copyright";
import "./globals.css";

export const metadata: Metadata = {
  title: "DOiT MVP",
  description: "DOiT - FrontEnd",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <InitColorSchemeScript attribute="class" />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <StoreProvider>
              <CssBaseline />
              <AppBarHeader />
              {children}
              <Copyright />
            </StoreProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

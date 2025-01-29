"use client";

import { StyledComponentsRegistry } from "@/lib/registry";
import { GlobalStyled } from "@/styles/global";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyled />
            <div
              style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Header />
              <main style={{ flexGrow: 1, padding: "20px" }}>{children}</main>
            </div>
            <ToastContainer />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

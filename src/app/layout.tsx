"use client";

import { usePathname } from "next/navigation";
import { StyledComponentsRegistry } from "@/lib/registry";
import { GlobalStyled } from "@/styles/global";
import { theme } from "@/styles/theme";
import styled, { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "@/components/Header";
import Image from "next/image";

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;

  img {
    position: absolute;
    pointer-events: none;
    transform: scale(0.5);
  }

  .shape1 {
    top: 10%;
    left: 0;
    @media screen and (max-width: 760px) {
      left: -70px;
    }
  }

  .shape2 {
    top: 15%;
    right: 0;
    @media screen and (max-width: 760px) {
      right: -100px;
    }
  }

  .shape3 {
    bottom: -10%;
    left: 0;
    @media screen and (max-width: 760px) {
      left: -100px;
    }
  }

  .shape4 {
    bottom: -2%;
    right: 0;
    transform: scale(0.4);
    @media screen and (max-width: 760px) {
      right: -130px;
    }
  }
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";
  const isSavedListPage = pathname === "/favorites";

  const isStudentProfile = true;

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
              {!isLoginPage && !isSavedListPage && (
                <BackgroundContainer>
                  <Image
                    src="./svg/bg_shape1.svg"
                    alt="Shape 1"
                    className="shape1"
                    width={300}
                    height={300}
                  />
                  <Image
                    src="./svg/bg_shape2.svg"
                    alt="Shape 2"
                    className="shape2"
                    width={400}
                    height={400}
                  />
                  <Image
                    src="./svg/bg_shape3.svg"
                    alt="Shape 3"
                    className="shape3"
                    width={500}
                    height={500}
                  />
                  <Image
                    src="./svg/bg_shape4.svg"
                    alt="Shape 4"
                    className="shape4"
                    width={500}
                    height={500}
                  />
                </BackgroundContainer>
              )}
              {!isLoginPage && <Header showFavorites={isStudentProfile} />}
              <main style={{ flexGrow: 1, padding: "20px" }}>{children}</main>
            </div>
            <ToastContainer />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

import React, { ReactNode } from "react";
import styled from "styled-components";
import { Header } from "../Header";

const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.main`
  flex-grow: 1;
  padding: 20px;
`;

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <MainContainer>
      <Header />
      <Content>{children}</Content>
    </MainContainer>
  );
};

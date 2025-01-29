"use client";
import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
  color: white;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: black;
  cursor: pointer;
`;

const LogoutButton = styled.button`
  color: white;
  border: none;
  cursor: pointer;
`;

const LogoutIcon = styled.img``;

export const Header: React.FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    console.log("User logged out");
  };

  return (
    <HeaderContainer>
      <Logo onClick={() => router.push("/")}>ConfiaEduca</Logo>
      <LogoutButton onClick={handleLogout}>
        <LogoutIcon src="./svg/logout.svg" />
      </LogoutButton>
    </HeaderContainer>
  );
};

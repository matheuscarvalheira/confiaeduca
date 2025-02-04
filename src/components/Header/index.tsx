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

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StarButton = styled.button`
  color: white;
  border: none;
  background: none;
  cursor: pointer;
  margin-right: 40px;
`;

const StarIcon = styled.img``;

const LogoutButton = styled.button`
  color: white;
  border: none;
  background: none;
  cursor: pointer;
`;

const LogoutIcon = styled.img``;

interface HeaderProps {
  showFavorites?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ showFavorites = false }) => {
  const router = useRouter();

  const handleLogout = () => {
    console.log("User logged out");
  };

  return (
    <HeaderContainer>
      <Logo onClick={() => router.push("/")}>ConfiaEduca</Logo>
      <ButtonContainer>
        {showFavorites && (
          <StarButton onClick={() => router.push("/favorites")}>
            <StarIcon src="./svg/favorite-filled.svg" alt="Favorites" />
          </StarButton>
        )}
        <LogoutButton onClick={handleLogout}>
          <LogoutIcon src="./svg/logout.svg" alt="Logout" />
        </LogoutButton>
      </ButtonContainer>
    </HeaderContainer>
  );
};

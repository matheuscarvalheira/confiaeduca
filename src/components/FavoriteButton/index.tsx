import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const Count = styled.span`
  font-size: 16px;
`;

const FavoriteButton: React.FC = () => {
  const [favorites, setFavorites] = useState(30);
  const [favorited, setFavorited] = useState(false);

  const handleFavorite = () => {
    setFavorites(favorited ? favorites - 1 : favorites + 1);
    setFavorited(!favorited);
  };

  return (
    <Button onClick={handleFavorite}>
      <Icon
        src={favorited ? "./svg/favorite-filled.svg" : "./svg/favorite.svg"}
        alt="Favorite"
      />
      <Count>{favorites}</Count>
    </Button>
  );
};

export default FavoriteButton;

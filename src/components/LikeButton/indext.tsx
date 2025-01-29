import React, { useState } from 'react';
import styled from 'styled-components';

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

const LikeButton: React.FC = () => {
  const [likes, setLikes] = useState(100);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLikes(liked ? likes - 1 : likes + 1);
    setLiked(!liked);
  };

  return (
    <Button onClick={handleLike}>
      <Icon src={liked ? "./svg/heart-filled.svg" : "./svg/heart.svg"} alt="Like" />
      <Count>{likes}</Count>
    </Button>
  );
};

export default LikeButton;
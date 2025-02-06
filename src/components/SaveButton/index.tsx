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

const SaveButton: React.FC = () => {
  const [saves, setSaves] = useState(50);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaves(saved ? saves - 1 : saves + 1);
    setSaved(!saved);
  };

  return (
    <Button onClick={handleSave}>
      <Icon src={saved ? "./svg/save-filled.svg" : "./svg/save.svg"} alt="Save" />
      <Count>{saves}</Count>
    </Button>
  );
};

export default SaveButton;
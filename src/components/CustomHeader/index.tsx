import React from "react";
import styled from "styled-components";

interface CustomHeaderProps {
  title: string;
  subtitle: string;
  showArrow?: boolean;
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled.div`
  text-align: center;
`;

const ArrowImage = styled.img`
  position: absolute;
  bottom: -50px;
  left: 100px;
  margin-left: 10px;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  font-weight: bold;
`;

const Subtitle = styled.h2`
  font-weight: normal;
  font-size: smaller;
`;

const CustomHeader: React.FC<CustomHeaderProps> = ({
  title,
  subtitle,
  showArrow,
}) => {
  return (
    <Container>
      {showArrow && <ArrowImage src="/svg/arrow.svg" alt="Arrow" />}
      <TextContainer>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </TextContainer>
    </Container>
  );
};

export default CustomHeader;

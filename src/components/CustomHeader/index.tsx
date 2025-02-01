import React from "react";
import {
  Container,
  TextContainer,
  ArrowImage,
  Title,
  Subtitle,
} from "./styles";
import { CustomHeaderProps } from "./props";

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

import React from "react";
import { CustomHeaderProps } from "./props";
import * as S from "./styles"
import { useRouter } from "next/navigation";

const CustomHeader: React.FC<CustomHeaderProps> = ({
  title,
  subtitle,
  showArrow,
}) => {
  
  const router = useRouter();

  return (
    <S.Container>
      {showArrow && 
        <S.ArrowImage 
          src="/svg/arrow.svg"
          alt="Arrow"
          onClick={() => {router.back()}}
        />
      }
      <S.TextContainer>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.TextContainer>
    </S.Container>
  );
};

export default CustomHeader;

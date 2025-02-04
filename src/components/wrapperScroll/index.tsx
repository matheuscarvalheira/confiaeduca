import { ReactNode, useRef, useState, MutableRefObject } from "react";
import { WrapperScrollProps } from "./props";
import * as S from './styles';

export const WrapperScroll = ({ children }: WrapperScrollProps): ReactNode => {
  return (
    <S.WrapperScroll>
      {children}
    </S.WrapperScroll>
  );
};

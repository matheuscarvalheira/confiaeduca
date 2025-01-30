import { ReactNode } from "react";
import { ButtonProps } from "./props";
import * as S from './styles';

export const Button = ({text, onClick, buttonType, ...props}: ButtonProps): ReactNode => {

  return (
    <S.Button buttontype={buttonType} onClick={onClick} {...props}>
      {buttonType === 'open-modal' ?
        <S.PlusIcon />
      : text}
     
    </S.Button>
  )
}
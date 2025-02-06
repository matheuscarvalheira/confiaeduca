import styled from "styled-components";

export const TriangleSvg = styled.svg<{$active: boolean, $answered: boolean}>`
  transform: ${({$active}) => $active ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: transform 0.4s ease;

  path {
    fill: ${({$answered, theme}) => $answered ? theme.greenScreamin : theme.indigoLavander};
    transition: fill 0.4s ease;
  }
`;

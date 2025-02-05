import styled from "styled-components";
import { theme } from "@/styles/theme";

export const SalaVirtual = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

export const Content = styled.div`

`;

export const ButtonContainer = styled.div`
  width: 75%;
  bottom: 0;
  display: flex;
  padding: 15px 10px;
  position: absolute;
  justify-content: flex-end;
  background-color: ${theme.white};

  @media (max-width: 600px) {
    width: 90%;
  }

`;

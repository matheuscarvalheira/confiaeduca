import { theme } from "@/styles/theme";
import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  background-color: ${theme.cultured};
  border-radius: 10px;
  padding: 10px;
  margin-top: 15px;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
 
`;

export const ItemTitle = styled.p`
  font-weight: bold;
  font-size: 13pt;
`;

export const ItemSubTitle = styled.p`
  font-size: 11pt;
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

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const ModalTitle = styled.p`
  font-weight: bold;
  font-size: 14pt;
  text-align: center;
`;

export const ModalInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-top: 15px;
`;

export const ModalInput = styled.input`
  color: ${theme.black};
  background-color: ${theme.cultured};
`;

export const ModalButtonContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 15px;
  justify-content: flex-end;
`;

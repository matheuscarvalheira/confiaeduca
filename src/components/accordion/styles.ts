// styles.ts
import styled from "styled-components";

export const AccordionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Accordion = styled.div<{ $answered: boolean }>`
  background-color: ${({ theme, $answered }) =>
    $answered ? theme.white : theme.cultured};
  border: ${({ theme, $answered }) =>
    $answered
      ? `3px solid ${theme.greenScreamin}`
      : `3px solid ${theme.cultured}`};
  border-radius: 10px;
`;

export const Header = styled.div`
  padding: 25px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  @media (max-width: 600px) {
    padding: 15px 20px;
  }
`;

export const Content = styled.div<{
  $open: boolean;
  $contentWrapperHeight: number;
}>`
  height: ${({ $open, $contentWrapperHeight }) =>
    $open ? `${$contentWrapperHeight}px` : "0"};
  overflow: hidden;
  transition: height 0.3s ease;
`;

export const ContentWrapper = styled.div`
  padding: 0 30px 25px;

  @media (max-width: 600px) {
    padding: 0 15px 20px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 15px;
  padding-top: 20px;
`;

export const Form = styled.div<{ $isTeacher: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ $isTeacher }) => ($isTeacher ? "flex-end" : "flex-start")};
`;

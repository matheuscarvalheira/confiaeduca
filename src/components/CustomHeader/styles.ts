import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 80%;

  @media (max-width: 600px) {
    width: 95%;
  }
  
`;

export const TextContainer = styled.div`
  text-align: center;
`;

export const ArrowImage = styled.img`
  position: absolute;
  padding: 5px;
  left: -5px;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 1.5em;
  }
`;

export const Subtitle = styled.h2`
  font-weight: normal;
  font-size: smaller;

  @media (max-width: 600px) {
    font-size: 0.8em;
  }
`;

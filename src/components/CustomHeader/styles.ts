import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding: 20px;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

export const TextContainer = styled.div`
  text-align: center;
`;

export const ArrowImage = styled.img`
  position: absolute;
  bottom: -50px;
  left: 100px;
  margin-left: 10px;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    bottom: -30px;
    left: 50px;
  }
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

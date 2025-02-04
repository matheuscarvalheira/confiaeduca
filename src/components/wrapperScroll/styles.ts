import styled from "styled-components";

export const WrapperScroll = styled.div`
  width: 80%;
  height: 60vh;
  margin: 0 auto;
  margin-top: 40px;
  overflow-y: auto;

  @media (max-width: 600px) {
    width: 95%;
  }
`;

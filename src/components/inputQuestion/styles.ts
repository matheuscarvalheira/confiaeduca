import styled from 'styled-components';

export const InputQuestionContainer = styled.div`
  width: 78%;
  position: relative;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({theme}) => theme.cultured};
  padding: 5px 25px;
  border-radius: 15px;
`;

export const InputQuestion = styled.input<{ $showIcon: boolean }>`
  color: ${({theme}) => theme.black};
  width: 100%;
  background-color: ${({theme}) => theme.cultured};
  font-size: 16px;

  @media (max-width: 600px) {
    padding: 10px 15px;
    font-size: 15px;
    padding-left: ${({ $showIcon }) => ($showIcon ? '40px' : '10px')};
  }
`;

export const SendButton = styled.button``;

export const SendButtonIcon = styled.img``;

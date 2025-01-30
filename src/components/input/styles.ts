import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
`;

export const Input = styled.input<{ $showIcon: boolean }>`
  background-color: ${({theme}) => theme.greenCharleson};
  color: ${({theme}) => theme.white};
  padding: 15px 20px;
  border-radius: 15px;
  width: 100%;
  padding-left: ${({ $showIcon }) => ($showIcon ? '40px' : '20px')};

  @media (max-width: 600px) {
    padding: 10px 15px;
    font-size: 15px;
    padding-left: ${({ $showIcon }) => ($showIcon ? '40px' : '10px')};
  }
`;

import styled from "styled-components";

export const Modal = styled.div<{ $open: boolean }>`
  background-color: ${({theme}) => theme.shadowBlack};
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: ${({$open}) => $open ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
`

export const ModalBox = styled.div`
  width: 530px;
  height: 245px;
  background-color: ${({theme}) => theme.white};
  border-radius: 10px;
  padding: 18px;

  @media (max-width: 900px) {
    width: 90%;
    height: 50%;
    padding: 12px;
  }
`

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
`;

export const Body = styled.div`
  width: 100%;
  padding: 0px 20px;
`;

export const CloseIcon = styled.img`
  cursor: pointer;
`;
import styled from "styled-components";
import { theme } from "@/styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 90vh;
  overflow: hidden;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 458px;
  height: 361px;
  label {
    width: 45px;
    height: 21px;
    margin-bottom: 10px;
    color: ${theme.black};
    align-self: flex-start;
    margin-left: 50px;
  }
  input {
    max-width: 380px;
    width: 80vw;
    margin-bottom: 20px;
    background-color: ${theme.cultured};
    color: ${theme.black};
    padding: 20px;
    border-radius: 15px;
    box-sizing: border-box;
  }
  button {
    width: 362px;
    height: 37px;
    margin: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.white};
    border-radius: 15px;
  }
`;

export const Input = styled.input`
  max-width: 380px;
  width: 80vw;
  margin-bottom: 20px;
  background-color: ${theme.cultured};
  color: ${theme.black};
  padding: 10px;
  box-sizing: border-box;
`;

export const ForgotPassword = styled.p`
  color: ${theme.indigoLavander};
  cursor: pointer;
  margin-bottom: 30px;
`;

export const StyledCustomHeader = styled.div`
  width: 367px;
  height: 102px;
`;

export const ModalContent = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 20px;
  width: 300px;
  height: 30px;
`;

export const Subtitle = styled.p`
  font-size: 15px;
  margin-bottom: 20px;
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.indigoLavander};
`;

export const PhoneIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 5px;
`;

export const PhoneNumber = styled.span`
  font-size: 20px;
  color: ${theme.indigoLavander};
`;

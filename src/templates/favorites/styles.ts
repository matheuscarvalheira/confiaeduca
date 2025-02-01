import styled from "styled-components";
import { theme } from "@/styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1024px;
  margin-top: 20px;
  align-items: center;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  background-color: ${theme.cultured};
  color: ${theme.black};
  width: 100%;
  max-width: 1002px;
  height: 81px;
  margin-bottom: 10px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.indigoLavander};
    color: ${theme.white};
    cursor: pointer;
  }
`;

export const ItemName = styled.span`
  flex: 1;
  text-align: left;
  padding-left: 10px;
  font-weight: bold;
`;

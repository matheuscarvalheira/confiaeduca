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

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  background-color: ${theme.cultured};
  color: ${theme.black};
  width: 100%;
  height: 81px;
  margin-bottom: 10px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const ItemName = styled.span`
  flex: 1;
  text-align: left;
  padding-left: 10px;
  font-weight: bold;
`;

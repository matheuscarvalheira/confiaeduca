import { FC } from "react";
import * as S from "./styles";
import CustomHeader from "@/components/CustomHeader";
import { WrapperScroll } from "@/components/wrapperScroll";

const savedItems = [
  { id: "1", title: "Mathematics" },
  { id: "2", title: "History" },
  { id: "3", title: "Portuguese" },
  { id: "4", title: "English" },
  { id: "5", title: "Geography" },
  { id: "6", title: "Science" },
];

export const FavoritesTemplate: FC = () => {
  return (
    <S.Container>
      <CustomHeader
        title="Itens salvos"
        subtitle="Selecione a turma desejada"
        showArrow={true}
      />
      <WrapperScroll>
        {savedItems.map((item) => (
          <S.ListItem key={item.id}>
            <S.ItemName>{item.title}</S.ItemName>
          </S.ListItem>
        ))}
      </WrapperScroll>
    </S.Container>
  );
};

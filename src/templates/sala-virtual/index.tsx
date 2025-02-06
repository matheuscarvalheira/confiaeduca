import { Accordion } from "@/components/accordion";
import { FC, useContext, useState, useEffect } from "react";
import * as S from "./styles";
import { WrapperScroll } from "@/components/wrapperScroll";
import CustomHeader from "@/components/CustomHeader";
import { AuthContext } from "@/contexts/auth-context";
import { Button } from "@/components/button";
import { theme } from "@/styles/theme";
import { InputQuestion } from "@/components/inputQuestion";
import { ToastSuccess } from "@/utils/toast-messages";

export const SalaVirtualTemplate: FC = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      pergunta: "pergunta 1",
      resposta: "",
    },
    {
      id: 2,
      pergunta: "pergunta 2",
      resposta: "resposta",
    },
    {
      id: 3,
      pergunta: "pergunta 1",
      resposta: "",
    },
    {
      id: 4,
      pergunta: "pergunta 2",
      resposta: "resposta",
    },
    {
      id: 5,
      pergunta: "pergunta 1",
      resposta: "",
    },
    {
      id: 6,
      pergunta: "pergunta 2",
      resposta: "resposta",
    },
    {
      id: 7,
      pergunta: "pergunta 1",
      resposta: "",
    },
    {
      id: 8,
      pergunta: "pergunta 2",
      resposta: "resposta",
    },
    {
      id: 9,
      pergunta: "pergunta 1",
      resposta: "",
    },
    {
      id: 10,
      pergunta: "pergunta 2",
      resposta: "resposta",
    },
    {
      id: 11,
      pergunta: "pergunta 1",
      resposta: "",
    },
    {
      id: 12,
      pergunta: "pergunta 2",
      resposta: "resposta",
    },
  ]);

  const [isOpen, setIsOpen] = useState(true);

  const { userType } = useContext(AuthContext);

  function handleAnswer(id: number, resposta: string) {
    console.log("Resposta enviada");
    console.log("Id" + id, "Resposta" + resposta);
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, resposta } : item
    );
    console.log("Updated Items:", updatedItems);
    setItems(updatedItems);
  }

  useEffect(() => {
    console.log("Items updated:", items);
  }, [items]);

  function sendAnswer(value: string) {
    setItems([...items, { id: items.length + 1, pergunta: value, resposta: "" }]);
  }

  return (
    <S.SalaVirtual>
      <CustomHeader
        title={"Sala Virtual"}
        subtitle={"5 A - Fundamental 1"}
        showArrow={true}
      />
      <WrapperScroll>
        <Accordion
          items={items}
          renderHeader={(item) => <S.Header>{item.pergunta}</S.Header>}
          renderContent={(item) => <S.Content>{item.resposta}</S.Content>}
          isAnswered={(item) => (item.resposta !== "" ? true : false)}
          userType={userType}
          handleAnswer={handleAnswer}
        />
      </WrapperScroll>
      {userType === "professor" && isOpen ? (
        <S.ButtonContainer>
          <Button
            text="Fechar sala virtual"
            buttonType="action-button"
            style={{
              margin: 0,
              color: theme.white,
            }}
            onClick={() => {
              ToastSuccess('Sala fechada com sucesso');
              setIsOpen(false);
            }}
          />
        </S.ButtonContainer>
      ) : userType === "aluno" ? (
        <InputQuestion sendAnswer={sendAnswer}/>
      ) : null}
    </S.SalaVirtual>
  );
};
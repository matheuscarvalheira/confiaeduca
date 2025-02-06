import { Accordion } from "@/components/accordion";
import { FC, useContext } from "react";
import * as S from './styles'
import { WrapperScroll } from "@/components/wrapperScroll";
import CustomHeader from "@/components/CustomHeader";
import { AuthContext } from "@/contexts/auth-context";
import { Button } from "@/components/button";
import { theme } from "@/styles/theme";
import { InputQuestion } from "@/components/inputQuestion";

export const SalaVirtualTemplate: FC = () => {
  const items = [
    {
      pergunta: 'pergunta 1',
      resposta: ''
    },
    {
      pergunta: 'pergunta 2',
      resposta: 'resposta'
    },
    {
      pergunta: 'pergunta 1',
      resposta: ''
    },
    {
      pergunta: 'pergunta 2',
      resposta: 'resposta'
    },
    {
      pergunta: 'pergunta 1',
      resposta: ''
    },
    {
      pergunta: 'pergunta 2',
      resposta: 'resposta'
    },
    {
      pergunta: 'pergunta 1',
      resposta: ''
    },
    {
      pergunta: 'pergunta 2',
      resposta: 'resposta'
    },
    {
      pergunta: 'pergunta 1',
      resposta: ''
    },
    {
      pergunta: 'pergunta 2',
      resposta: 'resposta'
    },
    {
      pergunta: 'pergunta 1',
      resposta: ''
    },
    {
      pergunta: 'pergunta 2',
      resposta: 'resposta'
    }
  ]

    const {userType} = useContext(AuthContext);

  return (
    <S.SalaVirtual>
      <CustomHeader title={"Sala Virtual"} subtitle={"5 A - Fundamental 1"} showArrow={true}/>
      <WrapperScroll>
        <Accordion
          items={items}
          renderHeader={(item) => <S.Header>{item.pergunta}</S.Header>}
          renderContent={(item) => <S.Content>{item.resposta}</S.Content>}
          isAnswered={(item) => item.resposta != '' ? true : false}
          userType={userType}
        />
      </WrapperScroll>
      { userType =='professor' ?
        <S.ButtonContainer>
          <Button 
            text="Fechar sala virtual"
            buttonType="action-button"
            style={{
              margin: 0,
              color: theme.white
           }}
          />
        </S.ButtonContainer>
      : <InputQuestion/> }
                
    </S.SalaVirtual>
  )
}
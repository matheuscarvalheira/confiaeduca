import { Accordion } from "@/components/accordion";
import { FC } from "react";
import * as S from './styles'
import { WrapperScroll } from "@/components/wrapperScroll";
import { Header } from "@/components/Header";
import CustomHeader from "@/components/CustomHeader";

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
  return (
    <S.SalaVirtual>
      <CustomHeader title={"Sala Virtual"} subtitle={"5 A - Fundamental 1"}/>
      <WrapperScroll>
        <Accordion
          items={items}
          renderHeader={(item) => <S.Header>{item.pergunta}</S.Header>}
          renderContent={(item) => <S.Content>{item.resposta}</S.Content>}
          isAnswered={(item) => item.resposta != '' ? true : false}
        />
      </WrapperScroll>
    </S.SalaVirtual>
  )
}
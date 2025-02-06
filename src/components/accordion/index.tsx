import { ReactNode, useRef, useState } from "react";
import { AccordionProps } from "./props";
import * as S from "./styles";
import { TriangleSvg } from "../triangleSvg";
import SaveButton from "../SaveButton";
import LikeButton from "../LikeButton/indext";
import { Textarea } from "../textarea";
import { Button } from "../button";

export const Accordion = <T extends { id: number }>({
  items,
  renderHeader,
  renderContent,
  isAnswered,
  userType,
  handleAnswer,
}: AccordionProps<T>): ReactNode => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const [textArea, setTextArea] = useState<string>("");

  const contentWrapperRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <S.AccordionList>
      {items.map((item, index) => (
        <S.Accordion key={item.id} $answered={isAnswered(item)}>
          <S.Header onClick={() => handleClick(index)}>
            {renderHeader(item)}
            <TriangleSvg
              active={openIndex === index}
              isAnswered={isAnswered(item)}
            />
          </S.Header>
          <S.Content
            $open={openIndex === index}
            $contentWrapperHeight={
              contentWrapperRefs.current[index]?.clientHeight || 0
            }
          >
            <S.ContentWrapper
              ref={(el) => {
                contentWrapperRefs.current[index] = el;
              }}
            >
              {isAnswered(item) ? (
                renderContent(item)
              ) : (
                <S.Form $isTeacher={userType === "professor"}>
                  {userType === "professor" ? (
                    <>
                      <Textarea onChange={(e) => setTextArea(e.target.value)} />
                      <Button
                        text="Responder"
                        onClick={() => handleAnswer(item.id, textArea)}
                      />
                    </>
                  ) : userType === "aluno" ? (
                    <span>Essa pergunta ainda não foi respondida.</span>
                  ) : (
                    <></>
                  )}
                </S.Form>
              )}
              <S.ButtonsContainer>
                <LikeButton />
                <SaveButton />
              </S.ButtonsContainer>
            </S.ContentWrapper>
          </S.Content>
        </S.Accordion>
      ))}
    </S.AccordionList>
  );
};

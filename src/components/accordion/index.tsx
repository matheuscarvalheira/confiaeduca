import { ReactNode, useRef, useState, MutableRefObject } from "react";
import { AccordionProps } from "./props";
import * as S from './styles';
import { TriangleSvg } from "../triangleSvg";
import FavoriteButton from "../FavoriteButton";
import SaveButton from "../SaveButton";
import LikeButton from "../LikeButton/indext";

export const Accordion = <T,>({ items, renderHeader, renderContent, isAnswered }: AccordionProps<T>): ReactNode => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const contentWrapperRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <S.AccordionList>
      {items.map((item, index) => (
        <S.Accordion key={index} $answered={isAnswered(item)}>
          <S.Header onClick={() => handleClick(index)}>
            {renderHeader(item)}
            <TriangleSvg active={openIndex === index} isAnswered={isAnswered(item)} />
          </S.Header>
          <S.Content
            $open={openIndex === index}
            $contentWrapperHeight={contentWrapperRefs.current[index]?.clientHeight || 0}
          >
            <S.ContentWrapper
              ref={(el) => {
                contentWrapperRefs.current[index] = el;
              }}
            >
              {renderContent(item)}
              <S.ButtonsContainer>
                <LikeButton/>
                <SaveButton/>
              </S.ButtonsContainer>
            </S.ContentWrapper>
          </S.Content>
        </S.Accordion>
      ))}
    </S.AccordionList>
  );
};

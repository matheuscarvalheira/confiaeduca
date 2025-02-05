'use client';
import React, { useState } from 'react';
import { InputQuestionProps } from './props';
import * as S from './styles';

export const InputQuestion = ({ placeholder = 'Faça sua pergunta!', showIcon = false, ...props }: InputQuestionProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <S.InputQuestionContainer>
      <S.InputQuestion 
        value={inputValue} 
        onChange={handleChange} 
        placeholder={placeholder} 
        $showIcon={showIcon}
        {...props}
      />
      <S.SendButton>
        <S.SendButtonIcon src={'./svg/send-question.svg'}/>
      </S.SendButton>
    </S.InputQuestionContainer>
  );
};
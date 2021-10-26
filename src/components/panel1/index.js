import * as S from './styled';
import React from 'react';

const Panel1 = (props) => {
  const Values = () => {
    if (props.data) {
      return (
        <>
          {props.data.map((item, index) => {
            return (
              <S.ValueContainer key={index}>
                <S.Label>{item.label}</S.Label>
                <S.Value>R$ {item.value}</S.Value>
              </S.ValueContainer>
            );
          })}
        </>
      );
    } else {
      return <></>;
    }
  };

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>{props.title}</S.Title>
      </S.TitleContainer>
      {Values()}
    </S.Container>
  );
};
export default Panel1;

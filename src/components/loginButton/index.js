import React from 'react';
import * as S from './styled';

const LoginButton = (props) => {
  return (
    <S.Container>
      <S.Button onClick={() => props.handleClick()} disabled={props.disabled}>
        {props.label ? props.label : 'Entrar'}
      </S.Button>
    </S.Container>
  );
};
export default LoginButton;

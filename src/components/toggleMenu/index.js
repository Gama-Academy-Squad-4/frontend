import * as S from './styled';
import React from 'react';

const ToggleMenu = (props) => {
  let toggle = props.toggle;
  return (
    <S.Container toggle={toggle}>
      <S.UL>
        <S.LI>
          <S.StyledLink to="/dashboard">Dashboard</S.StyledLink>
        </S.LI>
        <S.LI>
          <S.StyledLink to="/details">Detalhes</S.StyledLink>
        </S.LI>
        <S.LI>
          <S.StyledLink to="/config">Cadastro</S.StyledLink>
        </S.LI>
      </S.UL>
    </S.Container>
  );
};
export default ToggleMenu;

import * as S from './styled';
import { useSelector } from 'react-redux';
import { Navbar, ConfigForm, SearchForm, SearchTable } from '../../components';
import React, { useState } from 'react';

const Config = () => {
  const [displaySearched, setDisplaySearched] = useState(false);

  const { searched } = useSelector((state) => state.allInfo);

  if (searched.length === 0 && displaySearched !== false) {
    setDisplaySearched(false);
  } else if (searched.length !== 0 && displaySearched !== true) {
    setDisplaySearched(true);
  }

  const handleOnSubmit = (e) => {
    console.log(e)
  };

  return (
    <S.Container>
      <Navbar active="cadastro" />
      <S.Section1>
        <S.Title>Cadastro de Transações</S.Title>
        <ConfigForm 
          handleSubmit={handleOnSubmit}
        />
      </S.Section1>
      <S.Section2>
        <S.Title>Edição de Transações (Consulta por data)</S.Title>
        <SearchForm />
        <SearchTable rows={searched} show={displaySearched} />
      </S.Section2>
    </S.Container>
  );
};
export default Config;

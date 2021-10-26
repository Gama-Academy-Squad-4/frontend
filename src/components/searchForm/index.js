import React, { useState } from 'react';
import { DatePickerInput, Label, LoginButton } from '..';
import * as S from './styled';

const SearchForm = (props) => {
  const [date, setDate] = useState(new Date());

  const handleOnSubmit = () => {
    let passport = {
      date: date,
    };
    props.handleOnSubmit(passport);
  };

  const handleDateChange = (e) => {
    setDate(e);
  };

  return (
    <S.Container>
      <S.FormContainer>
        <S.FormGroup>
          <Label label="Data de Compra" />
          <DatePickerInput onChange={handleDateChange} />
        </S.FormGroup>
        <S.FormGroup>
          <Label label=""/>
          <LoginButton handleClick={handleOnSubmit} label="Pesquisar" disabled={false} />
        </S.FormGroup>
      </S.FormContainer>
    </S.Container>
  );
};
export default SearchForm;

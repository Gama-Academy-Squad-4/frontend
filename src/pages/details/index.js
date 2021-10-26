import * as S from './styled';
import { Navbar, Table } from '../../components';
import { useSelector } from 'react-redux';
import React from 'react';

const Details = () => {
  const { transactions, btc24h } = useSelector((state) => state.allInfo);

  var rows = [];

  

  transactions.map((item) => {
    let auxItem = {
      data: item.date,
      quantidade: item.quantidade,
      compra: item.compra,
      atual: btc24h.atual,
      variancia: item.variancia,
    };
    rows.push(auxItem);
    return item;
  });

  return (
    <S.Container>
      <Navbar active="detalhes" />
      <S.Section1>
        <S.Title>Controle de Transações</S.Title>
        <Table rows={rows} />
      </S.Section1>
    </S.Container>
  );
};
export default Details;

import React, { useState, useEffect } from 'react';
import * as S from './styled';

const Table = (props) => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    if (props.rows) {
      setRows(props.rows);
    }
  }, [props.rows]);

  return (
    <S.Container>
      <S.TableContainer>
        <S.Table>
          <S.Thead>
            <S.TR>
              <S.TH>Data</S.TH>
              <S.TH>Quantidade</S.TH>
              <S.TH>Valor Compra</S.TH>
              <S.TH>Valor Atual</S.TH>
              <S.TH>Variância</S.TH>
            </S.TR>
          </S.Thead>
          <S.Tbody>
            {rows.map((mod, index) => {
              return (
                <S.TR key={index}>
                  <S.TD>{`${mod.data.getDate()}/${
                    mod.data.getMonth() + 1
                  }/${mod.data.getFullYear()}`}</S.TD>
                  <S.TD>{mod.quantidade}</S.TD>
                  <S.TD>{`R$ ${mod.compra}`}</S.TD>
                  <S.TD>{`R$ ${mod.atual}`}</S.TD>
                  <S.TD>{`${mod.variancia} %`}</S.TD>
                </S.TR>
              );
            })}
          </S.Tbody>
        </S.Table>
      </S.TableContainer>
    </S.Container>
  );
};
export default Table;

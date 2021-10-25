import React, { useState, useEffect } from 'react';
import * as S from './styled';

const SearchTable = (props) => {

    const [rows, setRows] = useState([]);
   
    useEffect(() => {
        if(props.rows){
            setRows(props.rows)
        } 
    },[props.rows])        
    
    return(
        <S.Container
            show={props.show}
        >            
            <S.TableContainer>
                <S.Table>
                    <S.Thead>
                        <S.TR>
                            <S.TH>Data</S.TH>
                            <S.TH>Quantidade</S.TH>
                            <S.TH>Valor Compra</S.TH>
                            <S.TH>Editar</S.TH>
                        </S.TR>                        
                    </S.Thead>
                    <S.Tbody>
                        {                            
                            rows.map((mod, index) => {
                                
                                return(
                                    <S.TR key={index}>                                        
                                        <S.TD>{`${mod.date.getDate()}/${mod.date.getMonth() +1}/${mod.date.getFullYear()}`}</S.TD>
                                        <S.TD>{mod.quantidade}</S.TD>
                                        <S.TD>{`R$ ${mod.compra}`}</S.TD>
                                        <S.TD><S.Icon/></S.TD>
                                    </S.TR>
                                )
                            })
                        }                        
                    </S.Tbody>
                </S.Table>
            </S.TableContainer>
        </S.Container>
    )

}
export default SearchTable
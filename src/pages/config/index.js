import * as S from './styled';
import { useSelector } from 'react-redux';
import { Navbar, ConfigForm, SearchForm, SearchTable} from '../../components';
import React, { useState, useEffect } from 'react';

const Config = (props) => {

    const [displaySearched, setDisplaySearched] = useState(false);

    const {
        searched
    } = useSelector((state) => state.allInfo)

    if( searched.length === 0 && displaySearched !== false){
        setDisplaySearched(false);
    }
    else if (searched.length !== 0 && displaySearched !== true) {
        setDisplaySearched(true)
    }

    return(
        <S.Container>
            <Navbar                 
                active = 'cadastro'
            />
            <S.Section1>
                <S.Title>Cadastro de Transações</S.Title>  
                <ConfigForm/>              
            </S.Section1>
            <S.Section2>
                <S.Title>Edição de Transações (Consulta por data)</S.Title>
                <SearchForm/>
                <SearchTable
                    rows = {searched}
                    show = {displaySearched}
                />
            </S.Section2>
        </S.Container>
    )

}
export default Config
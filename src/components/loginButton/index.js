import React from 'react';
import * as S from './styled';

const LoginButton = (props) => {     
    
    return(
        <S.Container>
            <S.Button
                onClick={() => props.handleClick()}
                disabled={props.disabled}
            >
                Entrar
            </S.Button>
        </S.Container>
        
    )
   
}
export default LoginButton
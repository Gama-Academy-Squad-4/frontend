import React, { useState } from 'react';
import { DatePickerInput, Input, Label, LoginButton, } from '..';
import * as S from './styled';

const ConfigForm = (props) => {

    const [ email, setEmail] = useState('');
    const [ pass, setPass] = useState('');

   

    const handleOnChangeEmail = (e) => {
        setEmail(e)       
    }

    const handleOnChangePass = (e) => {
        setPass(e)       
    }

    const handleOnSubmit = () => {
        let passport = {
            email: email,
            pass: pass

        }
        props.handleOnSubmit(passport)     
    }

    const handleDateChange = (e) => {
        //setDate(e)
        console.log(e)
    }
    

    return(
        <S.Container>            
            <S.FormContainer>
                <S.FormGroup>
                    <Label
                        label='Data de Compra'                        
                    />
                    <DatePickerInput
                        onChange={handleDateChange}
                    />
                </S.FormGroup>
                <S.FormGroup>
                    <Label
                        label='Quantidade'                        
                    />
                    <Input
                        type='number'
                        onChange={handleOnChangeEmail}
                        marginBottom='0'
                    />
                </S.FormGroup>
                <S.FormGroup>
                    <Label
                        label='Valor (R$)'                        
                    />
                    <Input
                        type='number'
                        onChange={handleOnChangePass}
                        marginBottom='0'
                    />
                </S.FormGroup>                
            </S.FormContainer>    
            <LoginButton                    
                handleClick={handleOnSubmit}
                label= 'Cadastrar'
                disabled={false}
            />        
        </S.Container>
    )

}
export default ConfigForm
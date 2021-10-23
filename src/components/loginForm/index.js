import React, { useState, useEffect } from 'react';
import { Input, Label, LoginButton, Logo } from '..';
import * as S from './styled';

const LoginForm = (props) => {

    const [ email, setEmail] = useState('');
    const [ pass, setPass] = useState('');
    const [ disabled, setDisabled] = useState(false);

    useEffect(() => {        
        if((email === '') || (pass ==='')){
            setDisabled(true)
        }
        else{
            setDisabled(false)
        }
    },[email, pass])


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
    

    return(
        <S.Container>
            <Logo/>
            <S.FormContainer>
                <S.FormGroup>
                    <Label
                        label='E-mail'                        
                    />
                    <Input
                        type='email'
                        onChange={handleOnChangeEmail}
                    />
                </S.FormGroup>
                <S.FormGroup>
                    <Label
                        label='Senha'                        
                    />
                    <Input
                        type='password'
                        onChange={handleOnChangePass}
                    />
                </S.FormGroup>
                <LoginButton
                    disabled={disabled}
                    handleClick={handleOnSubmit}
                />
            </S.FormContainer>            
        </S.Container>
    )

}
export default LoginForm
import * as S from './styled';
import { LoginForm } from '../../components';
import { Redirect } from 'react-router-dom';
import React, { useState } from 'react';

const Login = () => {
  const [logged, setLogged] = useState(false);

  const handleOnSubmit = (e) => {
    console.log(e);
    setLogged(true);
  };

  if (logged) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <S.Container>
      <LoginForm handleOnSubmit={handleOnSubmit} />
    </S.Container>
  );
};
export default Login;

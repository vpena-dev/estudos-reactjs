import React from 'react';
import { useNavigate } from 'react-router-dom';
import Head from './Head';

const Login = () => {
  const navigate = useNavigate();

  function handleClick() {
    console.log('Fazer Login');
    navigate('/sobre');
  }

  return (
    <div>
      <Head title="Login" description="Essa é a descrição do Login" />

      <h1>Login</h1>
      <button onClick={handleClick}>Logar</button>
    </div>
  );
};

export default Login;

import React from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: green;
    width: 100%;
    height: 75vh;
`
const ClickHere = styled.button`
  cursor: pointer;
`

function LoginPage() {

  const history = useHistory();

  const goToSignUpPage = () => { 
    history.push("/signup");
  };

  return (
    <LoginContainer>
      <h1>Login</h1>
      <input placeholder="E-mail"/>
      <input placeholder="Password"/>
      <button >Login</button>
      <p>Not a member yet? Create your account <button onClick={goToSignUpPage}>Here</button>.</p>
    </LoginContainer>
  );
}

export default LoginPage;
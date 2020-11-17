import React from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";

const SignContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: green;
    width: 100%;
    height: 75vh;
`

function SignUp() {

  const history = useHistory();

  const goToSignUpPage = () => { 
    history.push("/signup");
  };

  return (
    <SignContainer>
      <h1>Create New Account</h1>
      <input placeholder="E-mail"/>
      <input placeholder="Password"/>
      <button onClick={goToSignUpPage}>Sign Up</button>
    </SignContainer>
  );
}

export default SignUp;
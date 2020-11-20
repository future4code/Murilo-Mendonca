import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import Axios from 'axios';

const SignContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: green;
    width: 100%;
    height: 75vh;
    background: linear-gradient(180deg, #6930c3, #5e60ce, #5390d9, #4ea8de);

    input {
      border-radius: 5px;
      padding: 20px;
      margin-bottom: 20px;
      border: none;
    }
`
const ButtonSignUp = styled.button`
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: white;
  border: none;
  margin-right: 20px;
  padding: 12px 36px;
  background: linear-gradient(90deg, #6930c3, #4ea8de);
  cursor: pointer;
`

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      history.push("/list");
    } else {
      history.push("/signup")
    }
    
  }, [history])

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const login = () => {
    const body = {
      email: email,
      password: password
    }

    Axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/murilo-dumont/signup", body)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      history.push("/login");
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <SignContainer>
      <h1>Create New Account</h1>

      <input 
        value={email} onChange={handleEmail} placeholder="E-mail"
        />
      <input 
        type="password" value={password} onChange={handlePassword} placeholder="Password"
      />

      <ButtonSignUp onClick={login}>Sign Up</ButtonSignUp>
    </SignContainer>
  );
}

export default SignUp;
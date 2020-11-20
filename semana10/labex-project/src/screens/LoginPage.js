import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useHistory } from "react-router-dom";

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: green;
    width: 100%;
    height: 75vh;
    background: linear-gradient(90deg, #6930c3, #5e60ce, #5390d9, #4ea8de);

    input {
      border-radius: 5px;
      padding: 20px;
      margin-bottom: 20px;
      border: none;
    }
`

const ButtonLogin = styled.button`
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

const ClickHere = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  text-transform: uppercase;
  color: white;
`

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token")
      if(token) {
        history.push("/list")
      }
  }, [history])

  const login = () => {
    const body = {
      email: email,
      password: password
    }
    axios
      .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/murilo-dumont/login", body)
      .then((response) => {
        localStorage.setItem("token", response.data.token)
        history.push("/list")
      })
      .catch((error) => {
        console.log(error)
      })
  }
  
  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const goToSignUpPage = () => { 
    history.push("/signup");
  };

  return (
    <LoginContainer>
      <h1>Login</h1>
      <input 
        value={email} onChange={handleEmail} placeholder="E-mail" //murilo@email.com
      />
      <input 
        type="password" value={password} onChange={handlePassword} placeholder="Password" //teste123
      />
      <ButtonLogin onClick={login}>Login</ButtonLogin>

      <p>Not a member yet? Create your account <ClickHere onClick={goToSignUpPage}>Here</ClickHere>.</p>
    </LoginContainer>
  );
}

export default LoginPage;
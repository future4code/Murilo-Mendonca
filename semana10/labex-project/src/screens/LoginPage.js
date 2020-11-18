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
`
const ClickHere = styled.button`
  cursor: pointer;
`

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token")
      if(token) {
        history.push("/add-trip")
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
        history.push("/add-trip")
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
      <button onClick={login}>Login</button>

      <p>Not a member yet? Create your account <ClickHere onClick={goToSignUpPage}>Here</ClickHere>.</p>
    </LoginContainer>
  );
}

export default LoginPage;
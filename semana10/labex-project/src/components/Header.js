import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: blue;
    width: 100%;
    height: 20vh;
    background: white;

`
const ButtonHeader = styled.button`
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: white;
  border: none;
  margin-right: 20px;
  padding: 12px 36px;
  background: linear-gradient(225deg, #6930c3, #4ea8de);
  cursor: pointer;

`

function Header() {
  const history = useHistory();

  const goToHome = () => { 
    history.push("/");
  };
  
  const goToListTripsPage = () => {;
    history.push("/list");
  };

  const goToApplicationFormPage = () => {;
    history.push("/application-form");
  };

  const goToSignupPage = () => {;
    history.push("/signup");
  };

  
  return (
    <HeaderContainer>
      <image />
      <ul>
          <ButtonHeader onClick={goToHome}>Home</ButtonHeader>
          <ButtonHeader onClick={goToListTripsPage}>Trips</ButtonHeader>
          <ButtonHeader onClick={goToApplicationFormPage}>Application</ButtonHeader>       
          <ButtonHeader onClick={goToSignupPage}>SignUp</ButtonHeader>       
      </ul>
    </HeaderContainer>
  );
}

export default Header;
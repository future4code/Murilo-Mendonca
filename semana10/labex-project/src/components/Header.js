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

  const goToLoginPage = () => {;
    history.push("/login");
  };

  return (
    <HeaderContainer>
      <image />
      <ul>
          <button onClick={goToHome}>Home</button>
          <button onClick={goToListTripsPage}>Trips</button>
          <button onClick={goToApplicationFormPage}>Application</button>
          <button onClick={goToLoginPage}>Login</button>
      </ul>
    </HeaderContainer>
  );
}

export default Header;
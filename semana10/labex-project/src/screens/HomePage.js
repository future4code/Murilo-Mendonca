import React from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";

const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: green;
    width: 100%;
    height: 75vh;
`

function HomePage() {
  const history = useHistory();

  const goToApplicationFormPage = () => { 
    history.push("/application-form");
  };
  
  const goToListTripsPage = () => {;
    history.push("/list");
  };

  return (
    <HomeContainer>
      <button onClick={goToApplicationFormPage}>Application Form</button>
      <button onClick={goToListTripsPage}>List Trips</button>
    </HomeContainer>
  );
}

export default HomePage;


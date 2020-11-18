import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { useEffect } from 'react';
import useProtectedPage from '../components/useProtectedPage'

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
  useProtectedPage();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      history.push("/");
    }
  }, [history]);


  const goToApplicationFormPage = () => { 
    history.push("/application-form");
  };
  
  const goToListTripsPage = () => {;
    history.push("/trip-details");
  };

  return (
    <HomeContainer>
      <button onClick={goToApplicationFormPage}>Application Form</button>
      <button onClick={goToListTripsPage}>List Trips</button>
    </HomeContainer>
  );
}

export default HomePage;


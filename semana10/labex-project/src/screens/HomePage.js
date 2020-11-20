import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useHistory } from "react-router-dom";
import { useEffect } from 'react';
import useProtectedPage from '../components/useProtectedPage'


const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 75vh;
    background: linear-gradient(225deg, #6930c3, #5e60ce, #5390d9, #4ea8de);
`

const ButtonHome = styled.button`
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  background: transparent;
  border: none;
  color: white;
  margin-right: 20px;
  padding: 12px 36px;
  border: 2px solid white;
  cursor: pointer;

`

function HomePage() {
  const history = useHistory();
  useProtectedPage();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      history.push("/login");
    }
  }, [history]);


  const goToApplicationFormPage = () => { 
    history.push("/application-form");
  };
  
  const goToListTripsPage = () => {;
    history.push("/list");
  };

  return (
    <HomeContainer>
      <ButtonHome onClick={goToApplicationFormPage}>Application Form</ButtonHome>
      <ButtonHome onClick={goToListTripsPage}>List Trips</ButtonHome>  
    </HomeContainer>
  );
}

export default HomePage;


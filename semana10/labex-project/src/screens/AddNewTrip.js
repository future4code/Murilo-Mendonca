import React from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import useProtectedPage from '../components/useProtectedPage'

const AddContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: gray;
    width: 100%;
    height: 75vh;
    background: linear-gradient(180deg, #6930c3, #5e60ce, #5390d9, #4ea8de);
`
function AddNewTrip() {
    const history = useHistory();
    useProtectedPage();
    
    const goToAddTrip = () => { 
        history.push("/add-trip");
  };

  return (
    <AddContainer>
      <h1>Create Trip</h1>
      <input placeholder="Name"/>
      <input placeholder="Planet"/>
      <input placeholder="Date"/>
      <input placeholder="Duration"/>
      <input placeholder="Description"/>
      <button onClick={goToAddTrip}>Create</button>
      
    </AddContainer>
  );
}

export default AddNewTrip;
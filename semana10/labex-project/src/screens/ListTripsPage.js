import React from 'react'
import styled from 'styled-components'

const TripsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: yellow;
    width: 100%;
    height: 75vh;
`

function ListTripsPage() {
  return (
    <TripsContainer>
      <h1>Trips</h1>
      <select>Choose Your Trip</select>
      <p>Id: Trip Id</p>
      <p>Name: Marte Contra Ataca</p>
      <p>Planet: Marte</p>
      <p>Date: 11/11/2010</p>
      <p>Duration: 550 days</p>
      <p>Description: A big and red planet.</p>
            
    </TripsContainer>
  );
}

export default ListTripsPage;
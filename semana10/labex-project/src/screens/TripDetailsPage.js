import Axios from 'axios';
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import useProtectedPage from '../components/useProtectedPage'

const TripsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: yellow;
    width: 100%;
    height: 75vh;
`


function TripDetailsPage() {
    const[trip, setTrip] = useState({});
    useProtectedPage();

    useEffect(() => {
        getTripDetail();
      }, []);

      const getTripDetail = () => {
          Axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/murilo-dumont/trip/3Ga6Stvj6B687TNgFK72",{
              headers: {
                  auth: localStorage.getItem("token")
              }
          })
          .then((response) => {
              setTrip(response.data.trip)
          })
          .catch((error) => {
              console.log(error)
          })
      }

  return (
    <TripsContainer>
      <h1>Trips</h1>
      <select>Choose Your Trip</select>
      <p>Id: Trip Id</p>
      <p>name</p>
      <p>planet</p>
      <p>Date: 11/11/2010</p>
      <p>Duration: 550 days</p>
      <p>Description: A big and red planet.</p>
            
    </TripsContainer>
  );
}

export default TripDetailsPage;
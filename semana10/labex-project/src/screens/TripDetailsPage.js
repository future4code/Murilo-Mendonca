import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components'
import useProtectedPage from '../components/useProtectedPage'

const TripsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 75vh;
    background: linear-gradient(225deg, #6930c3, #5e60ce, #5390d9, #4ea8de);

    p {
        color: white;
    }

    h2 {
    color: white;
    text-transform: uppercase;
  }

`

const BgTripDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 50vh;
  background: black;
  padding: 10px;
  border-radius: 10px;
  color: #5e60ce; 

  p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #4ea8de;
    margin: 7px;
  }

`
const ButtonBack = styled.button`
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: white;
  border: none;
  margin-top: 15px;
  margin-right: 20px;
  padding: 12px 36px;
  background: linear-gradient(45deg, #6930c3, #4ea8de);
  cursor: pointer;
  outline: none;
`

function TripDetailsPage() {
    const[trips, setTrips] = useState({});
    const history = useHistory();
    const pathParams = useParams();
    const id = pathParams.id;
    useProtectedPage();

    useEffect(() => {
        getTripDetail();
      }, []);

      const getTripDetail = () => {
          axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/murilo-dumont/trip/${id}`, {
              headers: {
                  auth: localStorage.getItem("token")
              }
          })
          .then((response) => {
              setTrips(response.data.trip)
          })
          .catch((error) => {
              console.log(error)
          })
      }

      const goBack = () => {
        history.goBack();
    }


    return (   
        <TripsContainer>
            <h2>Trip Details</h2>
            <BgTripDetails>                 
                <p><strong>Name:</strong> {trips.name}</p>
                <p><strong>Planet:</strong> {trips.planet}</p>
                <p><strong>Date:</strong> {trips.date}</p>
                <p><strong>Duration:</strong> {trips.durationInDays} days.</p>
                <p><strong>Description:</strong> {trips.description}</p>   
            </BgTripDetails>    
            <ButtonBack onClick={goBack}>Voltar</ButtonBack>   
        </TripsContainer>        
    )        
}

export default TripDetailsPage;
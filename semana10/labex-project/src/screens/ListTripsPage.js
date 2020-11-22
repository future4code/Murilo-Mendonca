import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import useProtectedPage from '../components/useProtectedPage'
import useTripList from '../hooks/useTripList'


const TripsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(45deg, #6930c3, #5e60ce, #5390d9, #4ea8de);
    width: 100%;
    height: 75vh;
`
const BgTrips = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 50vh;
  background: black;
  padding: 10px;
  border-radius: 10px;

  h2 {
    color: white;
    text-transform: uppercase;
  }

  p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #4ea8de;
    cursor: pointer;
  }

  p:hover {
    color: white; 
  }
`

const ButtonCreate = styled.button`
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: white;
  border: none;
  margin-top: 15px;
  margin-right: 20px;
  padding: 12px 36px;
  background: linear-gradient(225deg, #6930c3, #4ea8de);
  cursor: pointer;
  outline: none;
`

function ListTripsPage() {

  const history = useHistory();

  const trips = useTripList() || [];
  useProtectedPage();

  const goToTripDetails = (tripId) => {
    history.push(`/trips/${tripId}`)
  }

  const goToCreate = () => {
    history.push("/add-trip");
}

  return (
    <TripsContainer>
      <BgTrips>
      <h2>Choose your trip</h2>
      {trips.map((trip) => {
        return <p onClick={() => {goToTripDetails(trip.id)}}>{trip.name}</p>
      })}
      </BgTrips>
      <ButtonCreate onClick={goToCreate}>Create new trip</ButtonCreate>          
    </TripsContainer>
  );
}

export default ListTripsPage;
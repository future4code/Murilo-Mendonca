import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import useProtectedPage from '../components/useProtectedPage'
import useTripList from '../Hooks/useTripList'


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
`
function ListTripsPage() {

  const history = useHistory();

  const trips = useTripList() || [];
  useProtectedPage();

  const goToTripDetails = (tripId) => {
    history.push(`/trips/${tripId}`)
  }

  return (
    <TripsContainer>
      <BgTrips>
      <h2>Choose your trip</h2>
      {trips.map((trip) => {
        return <p onClick={() => {goToTripDetails(trip.id)}}>{trip.name}</p>
      })}
      </BgTrips>          
    </TripsContainer>
  );
}

export default ListTripsPage;
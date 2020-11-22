import React from 'react'
import styled from 'styled-components'
import useProtectedPage from '../components/useProtectedPage'
import useForm from '../hooks/useForm'
import axios from 'axios';

const AddContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: gray;
    width: 100%;
    height: 75vh;
    background: linear-gradient(180deg, #6930c3, #5e60ce, #5390d9, #4ea8de);

    h2 {
      color: white;
      text-transform: uppercase;
    }

    input {
      display: flex;
      width: 500px;
      border-radius: 5px;
      padding: 20px;
      margin-bottom: 20px;
      border: none;
    }

    select {
      display: flex;
      width: 540px;
      border-radius: 5px;
      padding: 20px;
      margin-bottom: 20px;
      border: none;
    }
`

const ButtonCreate = styled.button`
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: white;
  border: none;
  margin-right: 20px;
  padding: 12px 36px;
  background: linear-gradient(225deg, #6930c3, #4ea8de);
  cursor: pointer;
  outline: none;
`


function TripCreatePage() {
    useProtectedPage();

    const createTrip = () => {
      const body = {
        name: form.name,
        planet: form.planet,
        date: form.date,
        durationInDays: form.durationInDays,
        description: form.description
      }
      
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/murilo-dumont/trips', body, {
      headers: {
        auth: localStorage.getItem("token")
      }
    })
    .then((response) => {
      alert("You have a new trip!")
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const { form, onChange } = useForm({
    name: "",
    planet: "",
    date: "",
    durationInDays: 0,
    description: ""
  })
  
    const handleInputChange = (event) => {
      const { name, value } = event.target
      onChange(name, value)
    }

    const onSubmitForm = (event) => {
      event.preventDefault()
      createTrip()
      console.log("FORM", form)
    }

  return (
    <AddContainer>
      <h2>Create Trip</h2>
      <form onSubmit={onSubmitForm}>
        <input 
          value={form.name} 
          placeholder={"Name"}
          onChange={handleInputChange}
          name={"name"}
          type={"text"}
          pattern={"[A-Za-z]{3,}"}
          required
        />

        <select 
        placeholder={"Choose one Planet"}
        value={form.planet} 
        onChange={handleInputChange}
        name={"planet"}
        type={"select"}
        required
        > 
          <option onclick={form.planet} value={"mercury"}>Mercury</option>
          <option onclick={form.planet} value={"venus"}>Venus</option>
          <option onclick={form.planet} value={"mars"}>Mars</option>
          <option value={"jupiter"}>Jupiter</option>
          <option value={"saturn"}>Saturn</option>
          <option value={"uranus"}>Uranus</option>
          <option value={"neptune"}>Neptune</option>
        </select>

        <input 
        value={form.date}
        placeholder={"Date"}
        onChange={handleInputChange}
        name={"date"} 
        type={"date"} 
        min={"2021-01-01"} 
        required
        />

        <input
          value={form.durationInDays} 
          placeholder={"Duration"}
          onChange={handleInputChange}
          name={"durationInDays"}
          type={"number"}
          min={50}
          required      
        />

        <input 
        value={form.description} 
        placeholder={"Description"}
        onChange={handleInputChange}
        name={"description"}
        type={"text"}
        required
        />
        <ButtonCreate>Create</ButtonCreate>
      </form>  
    </AddContainer>
  );
}

export default TripCreatePage;
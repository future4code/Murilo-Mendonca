import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import useForm from '../hooks/useForm'
import useTripsList from '../hooks/useTripList'


const ApplyContainer = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: red;
        width: 100%;
        height: 75vh;
        background: linear-gradient(90deg, #6930c3, #5e60ce, #5390d9, #4ea8de);

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
        display:flex;
        width: 540px;
        border-radius: 5px;
        padding: 20px;
        margin-bottom: 20px;
        border: none;
    }
`

const ButtonApply = styled.button`
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

function ApplicationFormPage() {
    const trips = useTripsList()
    const { form, onChange } = useForm({ 
        name: "",
        age: 0,
        profession: "",
        country: "",
        applicationText: "",
        trip: null 
      })
    
    const body = {
        name: form.name,
        age: form.age,
        profession: form.profession,
        country: form.country,
        applicationText: form.applicationText
    }
    
    console.log(form)

  const handleInput = (event) => {
    const { name, value } = event.target;
    onChange(name, value); 
  }

  const onSubmitForm = (event) => {
    event.preventDefault();
    
  axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/murilo-dumont/trips/${form.trip}/apply`, body) 
    .then(() => {
      alert('Thanks and enjoy your trip!')
    })
    .catch(error => {
        console.log(error.message)
    })
}  

    return (
      <ApplyContainer>
      <h2>Apply to trip</h2>
      <form onSubmit={onSubmitForm}>
        <input 
          name={"name"}
          type={"text"}
          placeholder={"Name"}
          value={form.name}
          onChange={handleInput}
          required={true}
        />
        <input 
          name={"age"}
          type={"text"}
          placeholder={"Age"}
          value={form.age}
          onChange={handleInput}
          min={"18"}
          required={true}
        />
        <input
          name={"profession"}
          type={"text"}
          placeholder={"Profession"}
          value={form.profession}
          onChange={handleInput}
          required={true}          
        />
        <select
          name={"country"}
          type={"text"}
          placeholder={"Choose your country"}
          value={form.country}
          onChange={handleInput}
          required={true} 
        >
            <option onclick={form.country} value={"null"}>Choose your country</option>
            <option onclick={form.country} value={"argentina"}>Argentina</option>
            <option onclick={form.country} value={"brazil"}>Brazil</option>
            <option onclick={form.country} value={"bolivia"}>Bolivia</option>
            <option onclick={form.country} value={"chile"}>Chile</option>
            <option onclick={form.country} value={"ecuador"}>Ecuador</option>
            <option onclick={form.country} value={"peru"}>Peru</option>
            <option onclick={form.country} value={"paraguay"}>Paraguay</option>
            <option onclick={form.country} value={"uruguay"}>Uruguay</option>
            <option onclick={form.country} value={"venezuela"}>Venezuela</option>         
        </select> 

        <input
          name={"applicationText"}
          type={"text"}
          placeholder={"Application text"}
          value={form.applicationText}
          onChange={handleInput}
          required={true}     
        />

        <select 
            name={"trip"}
            type={"select"}
            placeholder={"Select your trip"}
            value={form.trip}
            onChange={handleInput}
            required={true}
        >
        {trips.map((trip) => {
            return <option value={trip.id}>{trip.name}</option>
        })}
        </select>        

        <ButtonApply>Apply</ButtonApply>  
      </form>
         
    </ApplyContainer>
    )
 
}

export default ApplicationFormPage;
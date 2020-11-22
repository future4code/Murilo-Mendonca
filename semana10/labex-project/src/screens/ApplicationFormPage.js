// import axios from 'axios'
// import React from 'react'
// import styled from 'styled-components'
// import { useState, useEffect } from 'react'
// import useForm from '../components/UseForm'

// const ApplyContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     background-color: red;
//     width: 100%;
//     height: 75vh;
//     background: linear-gradient(90deg, #6930c3, #5e60ce, #5390d9, #4ea8de);

//     form {
//       display: flex;
//       flex-direction: column;
//       justify-content: center;
//       align-items: center;
//     }
// `

// // const makePostRequest = (body) => {
// // }

// function ApplicationFormPage() {

//   // const { form, onChange } = useForm({ 
//   //   name: "",
//   //   age: "",
//   //   profession: "",
//   //   country: "",
//   //   application: "" 
//   // })

//   // console.log("FORM", form);
  
//   const handleInput = (event) => {
//     const { value, name } = event.target;
//     onChange(value, name); 
//   }

//   const onSubmitForm = (event) => {
//     event.preventDefault();

//     const id = form.tripId;

//     const body = {
//       name: form.name,
//       age: form.age,
//       profession: form.profession,
//       country: form.country,
//       application: form.application
//     }
    
//   axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/murilo-dumont/trips/${id}/apply`, body) 
//     .then(() => {
//       alert('Obrigado por se inscrever')
//     })
//     .catch(error => {
//         console.log(error.message)
//     })
    
//     return (
//       <ApplyContainer>
//       <h2>Apply to trip</h2>
//       <form onSubmit={onSubmitForm}>
//         <input 
//           name={"name"}
//           type={"text"}
//           placeholder={"Name"}
//           value={form.name}
//           onChange={handleInput}
//           required={true}
//         />
//         <input 
//           name={"age"}
//           type={"text"}
//           placeholder={"Age"}
//           value={form.age}
//           onChange={handleInput}
//           min={"18"}
//           required={true}
//         />
//         <input
//           name={"profession"}
//           type={"text"}
//           placeholder={"Profession"}
//           value={form.profession}
//           onChange={handleInput}
//           required={true}          
//         />
//         <input 
//           name={"country"}
//           type={"text"}
//           placeholder={"Country"}
//           value={form.country}
//           onChange={handleInput}
//           required={true}   
//         />
//         <input
//           name={"application"}
//           type={"text"}
//           placeholder={"Application text"}
//           value={form.aplication}
//           onChange={handleInput}
//           required={true}     
//         />
//         <button>Apply</button>  
//       </form>
         
//     </ApplyContainer>
//     )
//   } 
// }

// export default ApplicationFormPage;
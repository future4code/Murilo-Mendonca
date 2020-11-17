import React from 'react'
import styled from 'styled-components'

const ApplyContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: red;
    width: 100%;
    height: 75vh;
`

function ApplicationFormPage() {

  return (
    <ApplyContainer>
      <h1>Apply to trip</h1>
      <input placeholder="Name"/>
      <input placeholder="Age"/>
      <input placeholder="Profession"/>
      <input placeholder="Country"/>
      <input placeholder="Application text"/>
      <button>Apply</button>     
    </ApplyContainer>
  );
}

export default ApplicationFormPage;
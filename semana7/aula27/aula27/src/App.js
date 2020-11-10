import './App.css';
import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 3fr 4fr;
  justify-content: center;
  margin: 0px;
  font-family: sans-serif;
  width: 100vw;
  height: 100vh;
  background-color: yellowgreen;
`

const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px;
  background-color: white;
`

class App extends React.Component {

  state = {
    task: "",

  }

  componentDidMount() {
    this.newTaskButton();
  }

  newTaskButton = () => {
    const urlApi = "https://www.boredapi.com/api/activity/";
    axios.get(urlApi)
    .then((response) => {
      console.log(response.data)
      this.setState({ task: response.data })
    }).catch((error) =>{
      console.log(error.message)
    })
  }

  render() {
    
    return (
      <Container>
        <h1>Boring day?<br />
          Let´s do someting!
        </h1>
        {this.state.task && 
        <TaskContainer>       
          <p><strong>Activity:</strong> {this.state.task.activity}</p>
          <p><strong>Type:</strong> {this.state.task.type}</p>
          <p><strong>Price:</strong> {this.state.task.price}</p>
          <p><strong>Participants:</strong> {this.state.task.participants}</p>
          <button onClick={this.newTaskButton}>Get New Task</button> 
        </TaskContainer>
        }        
      </Container>
    );
  }  
}

export default App;



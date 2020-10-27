import React from 'react'
import './App.css'
import axios from 'axios'


class App extends React.Component {
  state = {
    nameValue: "",
    emailValue: ""
  }




  createUser = () => {
    body = {
      name: this.state.nameValue,
      email: this.state.emailValue
    }

    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
      headers: {
      Authorization: "murilo-mendonca-dumont"
      }
    }).then(response => {
      window.alert("Usuário criado com sucesso")
    }).catch(error => {
      window.alert(error.message)
    })

    onChangeNameValue = (event) => {
      this.setState({ nameValue: event.target.value })
    }

    onChangeEmailValue = (event) => {
      this.setState({ emailValue: event.target.value })
    }

  return (
    <div>
      <input 
        value={this.state.nameValue}
        onChange={this.onChangeNameValue}
        placeholder={"Nome do Usuário"}
      />

      <input 
        value={this.state.emailValue}
        onChange={this.onChangeEmailValue}
        placeholder={"E-mail do Usuário"}
      />

      <button onClick={this.createUser}>
        Criar Usuário
      </button>

      
    </div>
  );
}
}

export default App;

import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const InputContainer = styled.div`
    display: grid;
`

class FormPage extends React.Component {
    state = {
        nameValue: "",
        emailValue: ""
    };

    createUser = () => {
        const body = {
          name: this.state.nameValue,
          email: this.state.emailValue
        };

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
            headers:  {
                Authorization: "murilo-mendonca-dumont"
            }
        })
        .then((response) => {
            alert("Usuário criado com sucesso!");
            this.setState({ nameValue: "", emailValue: "" });
        })
        .catch((error) => {
            alert("Digite um nome e e-mail válidos");
        })
    };

    onChangeNameValue = (event) => {
        this.setState({ nameValue: event.target.value });
    };

    onChangeEmailValue = (event) => {
        this.setState({ emailValue: event.target.value });
    };

    render() {
        return (
            <InputContainer>
                <input 
                value={this.state.nameValue} 
                onChange={this.onChangeNameValue}
                placeholder="Nome" 
                />

                <input 
                value={this.state.emailValue}
                onChange={this.onChangeEmailValue}
                placeholder="E-mail" 
                />

                <button onClick={this.createUser}>
                    Criar usuário
                </button>                
            </InputContainer>
        );                
    }
}

export default FormPage;

import React from 'react'
import './App.css'
import FormPage from './components/FormPage'
import UserListPage from './components/UserListPage'
import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    background-color: #ccc;

`

class App extends React.Component {
  state = {
    FormPage: true,
  }

  changePage = () => { // mudar de página 
    this.setState({ FormPage: !this.state.FormPage })
  };

  render() {
    const currentPage = this.state.FormPage ? <FormPage /> : <UserListPage />;

    return (
      <Container>
        {currentPage}
        <button onClick={this.changePage}> Mudar de página </button>
      </Container>
    );
  }

}

export default App;

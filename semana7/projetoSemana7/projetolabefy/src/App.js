import React from 'react'
import CreatePlaylistPage from "./components/CreatePlaylistPage";
import GetPlaylists from './components/GetPlaylists';
import styled from 'styled-components'
import './App.css';


const Container = styled.div`
  display: grid;
  justify-content: center;
`


class App extends React.Component {
  state = {
    createPlaylistPage: true
  }

  playlistPage = () => {
    this.setState({ createPlaylistPage: !this.state.createPlaylistPage })
  }

  render() {
    const currentPage = this.state.createPlaylistPage ? <CreatePlaylistPage /> : <GetPlaylists />

    return (
      <div>
        <Container>
        {currentPage}
        <button onClick={this.playlistPage}>Ver Playlists</button>
        </Container>
      </div>
    )
  }
}

  export default App;


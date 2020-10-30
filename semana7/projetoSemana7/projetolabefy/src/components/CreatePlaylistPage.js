import React from 'react'
import axios from 'axios'

class CreatePlaylistPage extends React.Component {
    state = {
        name: ""
    }

    createPlaylist = () => {
        const body = {
            name: this.state.name
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, {
                headers: "murilo-mendonca-dumont"
            }
        ).then((response) => {
            alert("Playlist criada com sucesso!")
        }).catch((error) => {
            console.log(error.message)
        })
    }

    onChangeName = (event) => {
        this.setState({ name: event.target.value })
    }

    render() {
        return (
            <div>
                <input value={this.state.name} onChange={this.onChangeName} />
                <button onClick={this.createPlaylist}>Criar Playlist</button>
            </div>
        )
    }   
}

    export default CreatePlaylistPage;
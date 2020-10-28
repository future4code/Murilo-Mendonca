import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const DeleteButton = styled.span`
    color: red;
    margin-left: 10px;
`

    const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    const axiosConfig = {
        headers: {
            Authorization: "murilo-mendonca-dumont"
        }
    }

class UserListPage extends React.Component {
    state = {
        userList: []
    };

    componentDidMount = () => {
        this.getAllUsers();
    }

    getAllUsers = () => {

        axios.get(baseUrl, axiosConfig)
        .then((response) => {
            this.setState({ userList: response.data })
        })
        .catch((error) => {
            console.log(error.message)
        })
    }

    

    deleteUser = (userId) => {
        axios.delete(`${baseUrl}/${userId}`, axiosConfig)
        .then((res) => {
            alert("Usuário deletado com sucesso!")
            this.getAllUsers();
        })
        .catch((error) => {
            alert("Houston we have a problem.")
        });
    }

    render() {

        const renderUserList = this.state.userList.map((user) => {
            return (
                 <p key={user.id}>
                    {user.name}
                    <DeleteButton 
                    onClick={() => this.deleteUser(user.id)}>
                        Delete
                    </DeleteButton>
                </p>
            );
        });

        return (
            <div>
                {renderUserList}
            </div>
        )                
    }
}

export default UserListPage;
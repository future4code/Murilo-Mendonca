import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { FaHeart, FaHeartBroken, FaTh  } from "react-icons/fa";

const ButtonContainer = styled.div`
  display: flex;
  width: 250px;
  justify-content: space-evenly;
  margin-top: 20px;
  
  button {
  display: flex;
  align-items: center;
  justify-content: center;  
  color: #ff0054;
  background-color: #fff;
  border: transparent;
  border-radius: 50px;
  width: 80px;
  height: 80px;
  cursor: pointer;
  outline: none;
  margin-bottom: 20px;  
}

  button:hover {
    background-color: transparent;
    box-shadow: 1px 1px 10px black;
    transition-duration: 0.4s;
  }

`

const MatchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 700px;
  border-radius: 15px;
  background-color: #5a189a;
  box-shadow: 2px 2px 10px black;
`

const PhotoContainer = styled.div`
    display: fixed;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 500px;
    background: url(${(props) => props.imageUrl}) center center/cover;
    border-radius: 20px;
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  
  h2 {
    margin-top: 10px;
    margin-bottom: 0;
    color: #ffbc42;
  }

  h3 {
    margin: 0;
  }

  p {
    display: flex;
    width: 80%;
    justify-content: center;
  }
`

const MenuLikes = styled.div`
  display: flex;
  align-self: flex-end;
  color: white;
  margin-right: 35px;
  margin-bottom: 20px;
  margin-top: 20px;

  button {
    color: #fff;
    background-color: transparent;
    border: transparent;
    cursor: pointer;
    outline: none;    
 }

  button:hover {
    color: #ff0054;
    transition-duration: 0.2s;    
  }
`

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/murilo-mendonca";

const MatchBox = (props) => {

  const [profile, setProfile] = useState({});

    const getProfile = () => {
      axios.get(`${baseUrl}/person`)
      .then(response => {
        setProfile(response.data.profile)
      }).catch(error => {
        console.log(error)
      })
    }

    const choosePerson = (id) => {
      const body ={
        id: id,
        choice: true
      }
      axios.post(`${baseUrl}/choose-person`, body)
      .then(response => {
        getProfile()
      })
      .catch(error => {
        console.log(error)
      })
    } 
 
    useEffect(() => {
      getProfile()
    }, [])

    const showListPage = () => {
      props.renderList("ListPage")
    }
  
  return (
    <MatchContainer>     
      <MenuLikes>
        <button><FaTh size={35} onClick={showListPage} /></button>
      </MenuLikes>

     <PhotoContainer imageUrl={profile.photo} />
        
     <InfoContainer>
        <h2>{ profile.name }</h2>
        <h3>{ profile.age }</h3>
        <p>{ profile.bio }</p>
      </InfoContainer>

     <ButtonContainer>
        <button onClick={getProfile}><FaHeartBroken size={50} /></button>
        <button onClick={ () => choosePerson(profile.id)}><FaHeart size={50} /></button>
      </ButtonContainer>     
    </MatchContainer>
    
  );
}

export default MatchBox;
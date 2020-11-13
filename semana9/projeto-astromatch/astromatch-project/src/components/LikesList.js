import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import axios from 'axios'
import { FaAngleLeft, FaTrash } from "react-icons/fa";


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

const MatchListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 500px;
  background-color: white; 
  overflow: auto;  
`

const InfosContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0 20px 20px;  
  width: 50px;
  height: 50px;
  
  img {
    width: 50px;
    height: 50px;
    margin-right: 20px;
  }
` 

const ButtonBack = styled.div`
  display: flex;
  justify-content: flex-start;  
  color: white;
  margin-bottom: 20px;

  button {
    color: #fff;
    background-color: transparent;
    border: transparent;
    cursor: pointer;
    outline: none; 
 }

  button:hover {
    color: #ff0054;
    transition-duration: 0.4s;    
  }
`

const DeleteButton = styled.div`
  display: flex;
  color: white;
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

const LikesList = (props) => {

  const [getMatches, setGetMatches] = useState([]);

  const AddMatchList = () => {
    axios.get(`${baseUrl}/matches`)
    .then(response => {
      setGetMatches(response.data.matches)
    }).catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    AddMatchList()
  }, []);


  const ClearMatchList = () => {
    axios.put(`${baseUrl}/clear`)
    .then(() => {})
    .catch(error => {
      console.log(error)
    })
  }

  const showMatchBox = () => {
      props.renderList("MatchBox")
    }

  return (
    <MatchContainer>
        <ButtonBack>
            <button>
                <FaAngleLeft size={35} onClick={showMatchBox} />
            </button> 
        </ButtonBack>

        <MatchListContainer>
          { getMatches.map((matchList) => {
            return (
              <InfosContainer>
                <img src={matchList.photo}/>
                <p>{matchList.name}</p> 
              </InfosContainer>               
              ) 
            })
          }  
        </MatchListContainer>

        <DeleteButton>
                <button>
                  <FaTrash size={35} 
                  onClick={ClearMatchList} 
                  />
                <br />Clear Match List
                </button>
        </DeleteButton> 
    </MatchContainer>    
  );
}

export default LikesList;
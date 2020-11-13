import React, { useState } from 'react';
import MatchBox from './components/MatchBox'
import LikesList from './components/LikesList'
import styled from 'styled-components'


const AppContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffbc42;
`

const App = (props) => {
  const [renderMatchBox, setMatchBox] = useState(true)
  const [renderListPage, setListPage] = useState(false)

  const renderPage = (page) => {
    if(page === "MatchBox") {
      setMatchBox(true)
      setListPage(false)
    } else {
      setMatchBox(false)
      setListPage(true)
    }
  }
 
  return (
    <AppContainer>
      {renderListPage && 
      <LikesList 
      renderScreen={renderPage} 
      renderList={renderPage}
      />}

      {renderMatchBox && 
      <MatchBox 
      renderScreen={renderPage} 
      renderList={renderPage}
      />}
      
    </AppContainer>
  );
}

export default App;

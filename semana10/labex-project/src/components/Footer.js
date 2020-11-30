import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: orange;
    width: 100%;
    height: 5vh;
    background: black;

    p{
      color: white;
      font-size: 10px;
    }
`

function Footer() {
  return (
    <FooterContainer>
      <p>SpaceX &copy; Murilo Mendonca - Labenu 2020</p>
    </FooterContainer>
  );
}

export default Footer;
import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: orange;
    width: 100%;
    height: 5vh;
`

function Footer() {
  return (
    <FooterContainer>
      <p>Footer</p>
    </FooterContainer>
  );
}

export default Footer;
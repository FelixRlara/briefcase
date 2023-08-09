"use client"
import { styled } from 'styled-components';
import React from 'react';

const HeaderStyled = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&family=Montserrat:ital,wght@0,700;1,400&display=swap');
color: white;
padding: 23px;
border-radius: .5em;
border: 1px solid rgba(255, 255, 255, .29);
h1 {
    font-size: 21px;
    line-height: 16px;
    font-weight: 700;
    text-transform: uppercase;
}
`

function Header() {
  return (
    
      <HeaderStyled>
        <h1>
            Rock<br/>Paper <br/> Scissors
        </h1>
        </HeaderStyled>
   
  )
}

export default Header
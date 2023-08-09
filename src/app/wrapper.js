"use client"
import { styled } from 'styled-components';
import React from 'react';

const WrapperStyled = styled.div`
max-width: 1024px;
margin: auto;
`

function Wrapper({ children }) {
  return (
    
    <WrapperStyled>
        {children}
    </WrapperStyled>
   
  )
}

export default Wrapper
"use client"
import { styled } from 'styled-components';
import React from 'react';


const TokenStyled = styled.div`
width: 130px;
height: 130px;
border: 15px solid ${({color}) => color.base } ;
box-sizing: border-box;
border-radius: 50%;
display: flex;
background: white;
box-shadow: 0 5px 0 ${({color}) => color.border };
cursor: pointer;
&:active {
    transform: scale(.9);
    
}
.box{
    box-shadow: 0 -5px 0 black;
    flex: 1;
    align-self: stretch;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
`
const colors = {
    paper: {
        base: '#516ef4',
        border: '#2543c3',

    },
    rock: {
        base:'#de3a5a',
        border: '#980e31',
    },
    scissor: {
        base:'rgb(233 163 20)',
        border: '#c76c14',
        
    }
}

function Token({ name }) {
  return (
    
    <TokenStyled color= {colors[name]}>
        <div className='box'>
        <img src= {`./images/icon-${name}.svg`} />
    </div>
    </TokenStyled>
   
  )
}

export default Token
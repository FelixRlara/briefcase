"use client"
import { styled } from 'styled-components';
import React from 'react';
import Token from './token';

const TableStyled = styled.div`
display: flex;
flex-flow: column;
flex-wrap: wrap;
justify-content: center;
`

function Table() {
  return (
    
    <TableStyled>
        <Token name="rock" />
        <Token name="paper"/>
        <Token name="scissor"/>
    </TableStyled>
   
  )
}

export default Table
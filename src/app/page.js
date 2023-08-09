"use client"

import Image from 'next/image'
import styles from './page.module.css'
import Header from './header'
import Wrapper from './wrapper'

import { styled } from 'styled-components'
import Table from './table'

const HomeStyle = styled.main`
/* @import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&family=Montserrat:ital,wght@0,700;1,400&display=swap'); */
@font-face {
  font-family: vilaka;
  src: url('/font/VilakaModernSerifFont.ttf');
}
background-image: radial-gradient(circle at top, #1F3757 20%, #131537 100%);
min-height: 100vh;
padding: 2em;
color: white;
font-family: Arial, Helvetica, sans-serif;

`

export default function Home() {
  return (
    <div>

      <HomeStyle>
        <Wrapper>
          <Header />
          <Table/>
        </Wrapper>
      </HomeStyle>

    </div>

  )
}

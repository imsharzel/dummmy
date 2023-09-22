import React from 'react'
import styled from 'styled-components'
import Header from './Header';
import Footer from './Footer';


function Cratoni() {
  return (
    <>
    <Header/>
    <Container>Cratoni</Container>
    <Footer/>
    </>
  )
}

export default Cratoni;

const Container = styled.div`
width: 90vw;
height: 48vh;
font-size: 3rem;
text-align:center;
color: black;

`
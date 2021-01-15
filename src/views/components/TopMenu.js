import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'

import logo from './../../img/logo.png'

import generatedText from './../../img/generatedtext.png'

import filters from './../../img/filtres.png'

const Heading = styled.div`
    height: 10vh;
    width: 100vw;
    min-height: 100px;
   min-width: 100px;
    color: red;
    background: #4C6C84;
    margin: 0;
    
    
  
    
`;

const GeneratedText = styled.img`

width: 35%;

float: right;
margin-top: 1.1%;


`

const Logo = styled.img`
height: 70%;

float: left;
margin-top: 0.8%;
margin-left: 0.7%;


`

const Filters = styled.img`

height: 60%;
float: right;
margin-top: 1%;
margin-right: 0.5%;
margin-left: 5%;

`





export default () => {
  return (

        <Heading>

        <Logo src = {logo} />

            <Filters src = {filters} />

            <GeneratedText src = {generatedText} />




        </Heading>




  );
}


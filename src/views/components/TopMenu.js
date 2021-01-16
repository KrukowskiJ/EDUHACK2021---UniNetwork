import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'

import logo from './../../img/logo.png'

import generatedText from './../../img/generatedtext.png'

import filters from './../../img/filtres.png'

const Heading = styled.div`
    width: 100vw;
    height: 12vh;
   min-width: 100px;
    color: red;
    background: #4C6C84;
    margin: 0;  
`

const GeneratedText = styled.img`
    width: 35%;
    float: right;
    margin-right:40px; 
    margin-top: 1.1%;
`

const Logo = styled.img`
  height: 60px;
  float: left;
  margin-top: 0.8%;
  margin-bottom: 0.8%;
  margin-left: 0.7%;
`

export default () => {
  return (
        <Heading>
            <Logo src = {logo} />
            <GeneratedText src = {generatedText} />
        </Heading>
  );
}


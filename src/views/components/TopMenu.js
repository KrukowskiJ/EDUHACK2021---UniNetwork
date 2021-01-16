import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'

import logo from './../../img/logo.png'

import generatedText from './../../img/generatedtext.png'

import filters from './../../img/filtres.png'

const Heading = styled.div`
    width: 100%;
    color: red;
    background: #4C6C84;
    margin: 0;  
`

const GeneratedText = styled.img`
    flex: 1;
    float: right;
    max-height:60px;
    margin-right:40px; 
    margin-top: 25px;
`

const Logo = styled.img`
  height: 60px;
  float: left;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 50px;
`

export default () => {
  return (
    <Row>
         <Heading>
            <Logo src = {logo} />
            <GeneratedText src = {generatedText} />
        </Heading>
    </Row>

  );
}


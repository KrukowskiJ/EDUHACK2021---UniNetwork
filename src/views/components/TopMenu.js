import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'

import logo from './../../img/logo.png'

import generatedText from './../../img/generatedtext.png'

import filters from './../../img/filtres.png'

const Heading = styled.div`
    min-height: 100px;
   min-width: 100px;
    color: red;
    background: #4C6C84;
    margin: 0;
    
`;

const GeneratedText = styled.img`
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
height: 50%;
width: 30%;
margin-top: 8px;
float: right;
margin-top: 1.2%;

`

const Logo = styled.img`
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
height: 60px;
width: 60px;
margin-top: 8px;
float: left;
margin: 1%;

`

const Filters = styled.img`
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
height: 60px;
width: 60px;
margin-top: 8px;
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


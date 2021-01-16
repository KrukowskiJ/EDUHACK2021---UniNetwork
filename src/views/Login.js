import React, { useState } from 'react';
import styled from "styled-components"
import logo from '../img/logo.png';
import { Row, Col } from 'react-bootstrap';
import App from '../App';
import {
  Redirect
} from 'react-router-dom';

export default () => {

  const [logedin, login] = useState(false)

  if (logedin) {
    return (
      <Redirect to="/swipe" />
    )
  }


  return (
    <Body>
      <Header>
        <BACK_COLOR>
          <Logo src={logo} />
        </BACK_COLOR>
        <Log>
          <Col>
            <Login placeholder="Login" value="demo123" />
          </Col>
          <Col>
            <Password placeholder="Password" input type="password" value="demo123" />
          </Col>
          <Col>
            <SignIn onClick={() => { login(true) }} >SIGN IN</SignIn >
          </Col>
        </Log>
      </Header>
    </Body>

  );
}

const Body = styled.div`
height:100vh;
width:100vw;
padding-top:25vh;
background-color: #F6F6F6; 
`

const Logo = styled.img`
 height: 74px;
 width: 74px;
 margin-top: 10px;
 margin-left: 13px;
`

const BACK_COLOR = styled.div`
  height: 94px;
  width: 100px;
  background-color: #4C6C84;
  margin: auto;
`

const Header = styled.div`
  height: 94px;
  width: 440px;
  margin:auto;
  
  background-color: #ACF2D3;
`
const Log = styled.div`
  height: 400px;
  width: 100%;
  background-color: #FFFFFF;
  border-radius: 0px 0px 30px 30px;
  
`

const Login = styled.input`
margin-left: 15%;
margin-top: 10%;
background-color: #F6F6F6;
  height: 50px;
  width: 70%;
  border: none;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 40px;  
padding: 30px;

`

const Password = styled.input`
margin-left: 15%;
margin-top: 5%;
background-color: #F6F6F6;
height: 50px;
width: 70%;
border: none;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 40px;
padding: 30px;

`
const SignIn = styled.button`
margin-left: 15%;
margin-top: 15%;
background-color: #4C6C84;
height: 50px;
width: 70%;
border: none;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 40px;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 20px;
color: #FFFBFB;
outline : none;
outline-offset: none ;
`
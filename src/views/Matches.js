import React from 'react';
import SectionTitle from "./atoms/SectionTitle";
import styled from "styled-components"
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../img/matches_header.png';

export default () => {
  return (
    <>

      <div>
        <SectionTitle title="YOUR MATCHES" />
      </div>


      <Row>

        <Profile_card></Profile_card>

        <Profile_card></Profile_card>

      </Row>
    </>
  );
}

const MyImg = styled.img`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  height: 60px;
  width: 60px;
  margin-top: 8px;

`

const CardBorder = styled.div`
border: solid 5px #4C6C84;
border-top: none;
height: 20em;
`

const GreenBox = styled.div`
background-color:#ACF2D3;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
height: 75px;

`
const Team_name = styled.h4`
color: #000000;
margin: auto;
text-align: left;
font-size: 24px;
margin: 1em;
`


const Profile_card = () => {
  return (
    <Col >
      <GreenBox>
        <Row>
          <Col xs={8}>
            <Team_name>HEALTH POINT</Team_name>
          </Col>
          <Col>
            <MyImg src={logo} />
          </Col>
        </Row>
      </GreenBox>

      <CardBorder>
        <Container>

        </Container>
      </CardBorder >
    </Col>
  );
}

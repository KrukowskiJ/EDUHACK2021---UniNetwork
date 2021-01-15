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
border: solid 5px rgba(76, 108, 132,  0.6);
border-top: none;
height: 100%;
padding: 4%;
`

const GreenBox = styled.div`
background-color:#ACF2D3;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
height: 74px;
`
const Team_name = styled.h4`
color: #000000;
margin-top: 25px;
margin-left: 5px;
text-align: left;
font-size: 24px;
`
const Header = styled.h4`
color: #000000;
margin: auto;
text-align: left;
font-size: 14px;
`

const Description = styled.h5`
color: #000000;
margin: auto;
text-align: left;
font-size: 11px;
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
        <Header>UNIVERSITY</Header>
        <Header>SHORT DESCRIPTION</Header>
        <Header>SKILLS</Header>
        <Header>LEVEL</Header>
        <Header>DESCRIPTION</Header>
        <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus nec erat vel sagittis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus nec erat vel sagittis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus nec erat vel sagittis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus nec erat vel sagittis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus nec erat vel sagittis.</Description>
        <Header>DATE</Header>
      </CardBorder >
    </Col>
  );
}

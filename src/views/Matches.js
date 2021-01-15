import React from 'react';
import SectionTitle from "./atoms/SectionTitle";
import styled from "styled-components"
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../img/matches_header.png';
import SkillBox from "./atoms/SkillBox";
import PerfectScrollbar from 'react-perfect-scrollbar'

export default () => {
  return (
    <>
      <div>
        <SectionTitle title="YOUR MATCHES" />
      </div>

      <Card />

      <Card />

      <Card />
    </>
  );
}

const MyImg = styled.img`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2));
  height: 60px;
  width: 60px;
  margin-top: 8px;

`

const CardBorder = styled.div`

border-top: none;
height: 90%;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 40px;
    padding-top: 20px; 
`
const Two_Cards = styled.div`
    padding: 0px;
    margin-top: 60px; 
    border: none;
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
const UniversityTitle = styled.h1`
    color: #4FB084;
    font-size: 15px;
    font-weight: bold;
`

const ShortDescription = styled.h1`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 16px;

    color: #989898;
`

const Date = styled.h1`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #7A7A7A;
`

const Description = styled.h1`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #989898;
`
const Title = styled.h1`
    font-family: Roboto;
    font-style: normal;
    font-weight: 200;
    font-size: 15px;
    margin-top: 10px;
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
        <Title>
          UNIVERSITY
                </Title>
        <UniversityTitle>
          MILITARY UNIVERSITY OF TECHNOLOGY
                </UniversityTitle>
        <Title>
          SHORT DESCRIPTION
                </Title>
        <ShortDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus nec erat vel sagittis.
                </ShortDescription>
        <Title>
          SKILLS
                </Title>

        <Row style={{ padding: 5 }}>
          <SkillBox skill="Programming" />
          <SkillBox skill="Biology" />
          <SkillBox skill="Physic" />
          <SkillBox skill="Project Managment" />
        </Row>




        <Title>
          LEVEL
                </Title>
        <Date>
          01.2021 - 12.2021
                </Date>
        <Title>
          DESCRIPTION
                </Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus nec erat vel sagittis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus nec erat vel sagittis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus nec erat vel sagittis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus nec erat vel sagittis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus nec erat vel sagittis.
                </Description>
        <Title>
          DATE
                </Title>
        <Date>
          01.2021 - 12.2021
                </Date>
      </CardBorder >
    </Col>
  );
}

const Card = () => {
  return (
    <Two_Cards>

      <Row>

        <Profile_card></Profile_card>

        <Profile_card></Profile_card>

      </Row>

    </Two_Cards>
  );
}
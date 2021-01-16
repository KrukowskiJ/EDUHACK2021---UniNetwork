import React from 'react';
import SectionTitle from "./atoms/SectionTitle";
import styled from "styled-components"
import { Row, Col } from 'react-bootstrap';
import logo from '../img/matches_header.png';
import SkillBox from "./atoms/SkillBox";

export default () => {
  return (
    <Mainn>

      <SectionTitle title="YOUR MATCHES" />

      <ScrollView>
        <Card />

        <Card />

        <Card />
      </ScrollView>
    </Mainn >
  );
}

const Mainn = styled.div`
  height: 100%;

`

const MyImg = styled.img`
  height: 50px;
  width: 50px;
  margin-top: 10px;

`

const CardBorder = styled.div`
border-top: none;
height: 85%;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 40px;
  
    
`
const Two_Cards = styled.div`
    padding: 0px;
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
text-align: left;
font-size: 24px;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 25px;
line-height: 29px;
margin-left:10px;
color: #6D6969;
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
const ScrollView = styled.div`
overflow:scroll;
height:80vh;
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
          <Col xs={9}>
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
          Sed cursus nec erat vel sagittis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus nec erat vel sagittis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus nec erat vel sagittis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus nec erat vel sagittis.
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
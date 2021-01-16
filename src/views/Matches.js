import {React} from 'react';
import SectionTitle from "./atoms/SectionTitle";
import styled from "styled-components"
import { Row, Col } from 'react-bootstrap';
import logo from '../img/matches_header.png';
import SkillBox from "./atoms/SkillBox";
import prjData from "../data/projects.json";
import StarFull from "../img/starfull.png"
import StarEmpty from "../img/starempty.png"
import { Link } from 'react-router-dom'

export default () => {
  return (
    <Mainn>

      <SectionTitle title="YOUR MATCHES" />

      <ScrollView>
        <Card data={prjData[0]} data2={prjData[1]} />

        <Card data={prjData[2]} data2={prjData[3]} />

        <Card data={prjData[0]} data2={prjData[1]} />
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
    background-color:#FAFAFA;
  
    
`
const Two_Cards = styled.div`
    padding: 0px;
    border: none;
    margin-Top:50px;
    margin-Left: 2px;
    margin-right: 10px;
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
overflow-y:scroll;
overflow-x:hidden;

height:70vh;
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
const Star = styled.img`

`

const Profile_card = ({ data }) => {
  return (
    <Col >
      <GreenBox>
        <Row>
          <Col xs={9}>
            <Team_name>{data.name}</Team_name>
          </Col>
          <Col>
            <Link to={"/chat"}>
               <MyImg src={logo} />
            </Link>
          </Col>
        </Row>
      </GreenBox>

      <CardBorder>
        <Title>
          UNIVERSITY
                </Title>
        <UniversityTitle>
          {data.uni}
        </UniversityTitle>
        <Title>
          SHORT DESCRIPTION
                </Title>
        <ShortDescription>
          {data.shortDesc}
        </ShortDescription>
        <Title>
          SKILLS
                </Title>

        <Row style={{ padding: 5 }}>
          <SkillBox skill="Programming" />
          <SkillBox skill="Biology" />
          {/* <SkillBox skill="Physic" /> */}
          <SkillBox skill="Project Managment" />
        </Row>




        <Title>
          LEVEL
                </Title>

        <div>
          <Star src={StarFull} />
          <Star src={StarFull} />
          <Star src={StarFull} />
          <Star src={StarEmpty} />
          <Star src={StarEmpty} />
        </div>

        <Title>
          DESCRIPTION
                </Title>
        <Description>
          {data.desc}
        </Description>
        <Title>
          DATE
                </Title>
        <Date>
          {data.date}
        </Date>
      </CardBorder >
    </Col>
  );
}

const Card = ({ data, data2 }) => {
  return (
    <Two_Cards>

      <Row>

        <Profile_card data={data}></Profile_card>

        <Profile_card data={data2}></Profile_card>

      </Row>

    </Two_Cards>
  );
}
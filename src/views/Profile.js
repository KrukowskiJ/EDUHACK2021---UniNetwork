import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import SkillBox from "./atoms/SkillBox";
import SkillBoxEmpty from "./atoms/SkillBoxEmpty";
import SkillsPng from "../img/profile_skills.png";
import SectionTitle from "./atoms/SectionTitle";
import Photo from "../img/girl.png";
export default () => {
  return (
    <div>
      <br></br>
      <br></br>
      <div>
        <SectionTitle title="PROFILE" />
      </div>
      <GreenLine />
      <Box>
        <Row>
          <Col md="6">
                <Row>
                  <Col md="6">
                     <Avatar src={Photo} />
                  </Col>
                  <Col md="6">
                    <SmallTittle>NAME</SmallTittle>
                    <NameAndSurname>ANIA</NameAndSurname>

                    <SmallTittle>SURNAME</SmallTittle>
                <NameAndSurname>KOWALSKA</NameAndSurname>
                  </Col>
            </Row>
            <br></br>
            <SmallTittle>UNIVERSITY</SmallTittle>
            <Univesity>MILITARY UNIVERSITY OF TECHNOLOGY</Univesity>
            <br></br>
            <BigTittle>MY RATING</BigTittle>
            <SkillsImg src={SkillsPng} />
          </Col>
          <Col md="6">
            <BigTittle>ABOUT ME</BigTittle>
            <Description>
              I am a new studnet, i can program a bit, and i am interested in
              biology. I would like to participate in small project and develop
              my skills. I have already participated in my school project eco
              world, when we coded a simple app that help people witg
              segregation of rubbish Any mentorgng would be great, messege me
              for more info!
            </Description>
            <BigTittle>SKILLS</BigTittle>
            <Row>
              <SkillBox skill="Programming" />
              <SkillBox skill="Biology" />
              <SkillBox skill="Project Managment" />
            </Row>
            <BigTittle>EXPIRIENCE</BigTittle>
          </Col>
        </Row>
      </Box>
    </div>
  );
};

const Avatar=styled.img`
  height:200px;
  width:200px;
`

const Box = styled.div`
  background: #fafafa;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 40px;
  padding-top: 20px;
`;
const SmallTittle = styled.h1`
  margin-top:20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 100;
  font-size: 20px;
  line-height: 29px;

  color: #7a7a7a;
`;

const BigTittle = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  font-size: 25px;
  line-height: 29px;
  color: #4fb084;
`;

const NameAndSurname = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 29px;

  color: #4fb084;
`;

const Description = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #989898;
`;

const GreenLine = styled.div`
  background-color: #acf2d3;
  border-top: none;
  height: 90%;
  box-shadow: 9px 9px 9px rgba(0, 0, 0, 0.25);
  padding: 40px;
  padding-top: 20px;
  margin-bottom: 5px;
`;

const SkillsImg = styled.img`
  /* border: solid 5px #4C6C84; */
  /* border-radius: 50%; */
  /* border-spacing:10px; */
  /* padding:20px; */
  height: 30px;
`;

const Univesity = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #4fb084;
`;

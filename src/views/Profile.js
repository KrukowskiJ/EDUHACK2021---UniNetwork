import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import SkillBox from "./atoms/SkillBox";
import SkillsPng from "../img/profile_skills.png";
import SectionTitle from "./atoms/SectionTitle";
import Photo from "../img/zdjecie1.png";
import userData from "../data/users.json";
import prjData from "../data/projects.json";

export default () => {
  return (
    <div>
      <div>
        <SectionTitle title="PROFILE" />
      </div>

      <Profile user={userData[0]} project={prjData[0]} />
    </div>
  );
};

const Avatar = styled.img`
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
  font-size: 20px;
  line-height: 29px;
  font-weight: bold;
  color: #7a7a7a;
`;

const BigTittle = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  font-size: 25px;
  line-height: 29px;
  margin-top: 15px;
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
margin-top: 30px;
   font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 16px;
  color: #989898;
`;

const Date = styled.h1`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #7A7A7A;
`
const Profile = ({ user, project }) => {
  return (
    <GreenLine >
      <Box>
        <Row>
          <Col md="6">
            <Row>
              <Col md="6">
                <Avatar src={Photo} />
              </Col>
              <Col md="6">
                <SmallTittle>NAME</SmallTittle>
                <NameAndSurname> {user.name}</NameAndSurname>

                <SmallTittle>SURNAME</SmallTittle>
                <NameAndSurname>{user.surname}</NameAndSurname>
              </Col>
            </Row>
            <br></br>
            <BigTittle>UNIVERSITY</BigTittle>
            <Univesity>{user.uni}</Univesity>
            <br></br>
            <BigTittle>MY RATING</BigTittle>
            <SkillsImg src={SkillsPng} />
          </Col>
          <Col md="6">
            <BigTittle>ABOUT ME</BigTittle>
            <Description>
              {user.aboutMe}
            </Description>
            <BigTittle>SKILLS</BigTittle>
            <Row>
              <SkillBox skill="Programming" />
              <SkillBox skill="Biology" />
              <SkillBox skill="Project Managment" />
            </Row>
            <BigTittle>EXPERIENCE</BigTittle>
            <SmallTittle>{project.name}</SmallTittle>
            <Description>
              {project.shortDesc}
            </Description>
            <Date>{project.date}</Date>
          </Col>
        </Row>
      </Box>
    </GreenLine>
  );
}
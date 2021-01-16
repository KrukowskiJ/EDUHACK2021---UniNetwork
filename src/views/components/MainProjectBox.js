import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectBox from "./ProjectBox";
import styled from "styled-components";
import prjData from "../../data/projects.json";
import Likepng from "../../img/like.png";
import Dislikepng from "../../img/dislike.png";

function changeImageSource(e) {
  if (e.target.getAttribute("alt") === "clicked") {
    e.target.setAttribute("src", Dislikepng);
    e.target.setAttribute("alt", "notClicked");
  } else {
    e.target.setAttribute("src", Likepng);
    e.target.setAttribute("alt", "clicked");
  }
}

export default ({ data }) => {
  var clicked = false;

  return (
    <div>
      <TitleLine>
        <Title>Health Point</Title>
      </TitleLine>
      <ProjectBox data={data || prjData[0]} />
      <Row>
        <Col md="6"></Col>
        <Col md="6">
          <Like src={Dislikepng} onClick={changeImageSource} alt="clicked" />
        </Col>
      </Row>
    </div>
  );
};

const TitleLine = styled.div`
  margin-top: 40px;
  padding-left: 20px;
  background: #acf2d3;
  box-sizing: border-box;
  background-color: #acf2d3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Title = styled.h1`
  padding: 10px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  color: #6d6969;
`;

const Like = styled.img`
  /* border: solid 5px #4C6C84; */
  /* border-radius: 50%; */
  /* border-spacing:10px; */
  /* padding:30px; */
  margin-top: -100px;
  margin-left: 360px;
  height: 50px;
`;

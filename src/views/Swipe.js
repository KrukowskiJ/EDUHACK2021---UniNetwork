import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from "styled-components"
import SectionTitle from "./atoms/SectionTitle";
import Likepng from "../img/like.png"
import Dislikepng from "../img/dislike.png"

export default () => {

  const LikeHandler = () => {

  }
  return (
    <>
      <SectionTitle title="Swipe" />
      <GreenBox />
      <CardBorder>
        <Container>
          <Row>
            <Col>
              <Row>
                <Col xs={4}> Prj logo</Col>
                <Col>
                  Prj name
                  Prj name
                </Col>
              </Row>
              <Row>
                <Col>
                  University
                  <br></br>Wat najlepsza uczelnia jest
                </Col>
              </Row>
              <Row>
                <Col>
                  <Like onClick={LikeHandler(true)} src={Likepng} />
                </Col>
                <Col>
                  <Like onClick={LikeHandler(false)} src={Dislikepng} />
                </Col>
              </Row>
            </Col>
            <Col>
              Prj desc
            </Col>
          </Row>
        </Container>
      </CardBorder>
    </>
  );
}

const CardBorder = styled.div`
border:solid 5px #4C6C84;
/* border-top: solid 20px #ACF2D3;  this looks wierd idk why*/

`
const GreenBox = styled.div`
background-color:#ACF2D3;

`
const Like = styled.img`
/* border: solid 5px #4C6C84; */
/* border-radius: 50%; */
/* border-spacing:10px; */
/* padding:30px; */
height:60px;
`
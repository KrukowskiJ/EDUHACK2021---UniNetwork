import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from "styled-components"
import SectionTitle from "./atoms/SectionTitle";
import Likepng from "../img/like.png"
import Dislikepng from "../img/dislike.png"

export default () => {

  const LikeHandler = (isGood) => {

    // if ()

  }


  return (
    <>
      <SectionTitle title="Swipe" />
      <GreenBox />

      <Background styles={{ marginTop: -40, opacity: 0.4, zIndex: -30 }} >
        <Card LikeHandler={LikeHandler} />
      </Background>

      <Background styles={{ marginTop: -20, opacity: 0.2, zIndex: -20 }}  >
        <Card LikeHandler={LikeHandler} />
      </Background>

      <Background styles={{ marginTop: 0, opacity: 1, zIndex: 0 }}  >

        <Card LikeHandler={LikeHandler} />
      </Background>


    </>
  );
}


const Card = ({ data, LikeHandler }) => {

  return (
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
  )

}


const Background = styled.div`
position:fixed;
margin-top:${props => props.styles.marginTop}px;
opacity:${props => props.styles.opacity};
z-index:${props => props.styles.zIndex};
`


const CardBorder = styled.div`
border:solid 5px #4C6C84;
background-color:#fff;
width:600px;
/* margin:auto; */
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
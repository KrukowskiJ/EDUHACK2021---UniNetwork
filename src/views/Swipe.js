import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from "styled-components"
import SectionTitle from "./atoms/SectionTitle";
import Likepng from "../img/like.png"
import Dislikepng from "../img/dislike.png"

export default () => {

  const [BGstyles, chagneBG] = useState({
    1: { marginTop: -200, opacity: 0, zIndex: 0, left: 0 },
    2: { marginTop: -20, opacity: 0.2, zIndex: -20, left: 0 },
    3: { marginTop: 0, opacity: 1, zIndex: 0, left: 0 },
    4: { marginTop: 0, opacity: 0, zIndex: 0, left: 3000 },
  });

  const LikeHandler = (isGood) => {

    const calcStyles = (oldOne) => {
      if (oldOne.left > 0) {
        if (isGood) return { ...oldOne, left: 3000 }
        return { ...oldOne, left: -3000 }
      }
      return oldOne

    }
    // if ()
    console.log(isGood)
    let newSytles = {
      1: calcStyles(BGstyles[2]),
      2: calcStyles(BGstyles[3]),
      3: calcStyles(BGstyles[4]),
      4: calcStyles(BGstyles[1])
    }
    chagneBG(newSytles)
  }




  return (
    <>
      <SectionTitle title="Swipe" />
      <GreenBox />

      <Background styles={BGstyles[1]} >
        1
        <Card LikeHandler={LikeHandler} />
      </Background>

      <Background styles={BGstyles[2]}  >
        2
        <Card LikeHandler={LikeHandler} />
      </Background>

      <Background styles={BGstyles[3]}  >
        3
        <Card LikeHandler={LikeHandler} />
      </Background>

      <Background styles={BGstyles[4]}  >
        4
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
                <Like onClick={() => LikeHandler(true)} src={Likepng} />
              </Col>
              <Col>
                <Like onClick={() => LikeHandler(false)} src={Dislikepng} />
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
transition: all 2s ease;
position:fixed;
margin-left:30vw;
margin-top:${props => props.styles.marginTop}px;
opacity:${props => props.styles.opacity};
z-index:${props => props.styles.zIndex};
left:${props => props.styles.left}px;

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
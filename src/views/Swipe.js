import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from "styled-components"
import SectionTitle from "./atoms/SectionTitle";
import Likepng from "../img/like.png"
import Dislikepng from "../img/dislike.png"
import ProjectBox from './components/ProjectBox'

import prjData from "../data/projects.json";

export default () => {

  console.log(prjData[0])
  const [BGstyles, chagneBG] = useState({
    1: { marginTop: -200, opacity: 0, zIndex: 0, left: 0 },
    2: { marginTop: 0, opacity: 0.2, zIndex: -20, left: 0 },
    3: { marginTop: 90, opacity: 1, zIndex: 20, left: 0 },
    4: { marginTop: 0, opacity: 0, zIndex: 20, left: -3000 },
  });

  const LikeHandler = (isGood) => {

    const calcStyles = (oldOne) => {
      if (oldOne.left !== 0) {
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
      <Background styles={BGstyles[1]} >
        <Card data={prjData[0]} LikeHandler={LikeHandler} />
      </Background>

      <Background styles={BGstyles[2]}  >
        <Card data={prjData[1]} LikeHandler={LikeHandler} />
      </Background>

      <Background styles={BGstyles[3]}  >

        <Card data={prjData[2]} LikeHandler={LikeHandler} />
      </Background>

      <Background styles={BGstyles[4]}  >
        <Card data={prjData[3]} LikeHandler={LikeHandler} />
      </Background>


    </>
  );
}


const Card = ({ data, LikeHandler }) => {

  return (
    <>
      <GreenBox />
      <CardBorder>
        <Container>
          <ProjectBox data={data}></ProjectBox>
          <Row>
            <Col></Col>
            <Col>
              <Row>
                <Col>
                  <Like onClick={() => LikeHandler(true)} src={Likepng} />
                </Col>
                <Col>
                  <Like onClick={() => LikeHandler(false)} src={Dislikepng} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </CardBorder>
    </>
  )

}


const Background = styled.div`
transition: all 2s ease;
/* transition: z-index 0s; */
position:fixed;
margin-left:30vw;
margin-top:${props => props.styles.marginTop}px;
opacity:${props => props.styles.opacity};
z-index:${props => props.styles.zIndex};
left:${props => props.styles.left}px;

`


const CardBorder = styled.div`
/* border:solid 5px #4C6C84; */
border-top:0px;
background-color:#fff;
/* width:40vw; */
width:800px;
height: 600px;
/* margin:auto; */
/* border-top: solid 20px #ACF2D3;  this looks wierd idk why */

`
const GreenBox = styled.div`
background-color:#ACF2D3;
/* border:solid 5px #ACF2D3; */
width:100%;
height:30px;
`

const Like = styled.img`
position:fixed;
/* border: solid 5px #4C6C84; */
/* border-radius: 50%; */
/* border-spacing:10px; */
/* padding:30px; */
margin-top:-60px;
margin-left:30px;
height:50px;
`
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from "styled-components"
import SectionTitle from "./atoms/SectionTitle";

export default () => {
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
                  Like
                </Col>
                <Col>
                  Dislike
                </Col>
              </Row>
            </Col>
            <Col>
              prj desc
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
const Title = styled.div`


`
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import styled from "styled-components";

export default () => {
  return (
    <Box>
        <Row>
            <Col md="6">
                <Title>
                    UNIVERSITY
                </Title>
                <Title>
                    SHORT DESCRIPTION
                </Title>
                <Title>
                    SKILLS
                </Title>
                <Title>
                    DATE
                </Title>
            </Col>
            <Col md="6">
                <Title>
                    LEVEL
                </Title>
                <Title>
                    DESCRIPTION
                </Title>
            </Col>
        </Row>
    </Box>
  );
}

const Box = styled.div`
    background: #FAFAFA;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 40px;
`
const Title=styled.h1`
    font-family: Roboto;
    font-style: normal;
    font-weight: 200;
    font-size: 20px;
`

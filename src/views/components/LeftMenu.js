import React from 'react';
import styled from 'styled-components'
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";


const Content = styled.div`
  
`;

export default () => {
  return (
    <Content>
        <Container>

                <Row>
                    <h1>temp menu</h1>
                </Row>
                <Row>
                    <Link to='projects'>Projects</Link> {" "}
                </Row>
                <Row>
                    <Link to='matches'>matches</Link> {" "}
                </Row>
                <Row>
                    <Link to='profile'>profile</Link> {" "}
                </Row>

           
            <Link to='swipe'>swipe</Link> {" "}





        </Container>
    </Content>
  );
}



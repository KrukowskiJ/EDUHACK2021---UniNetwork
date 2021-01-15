import React from 'react';
import styled from 'styled-components'
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";


const Content = styled.div`
  background: #D0D0D0;
  margin: 0;
  height: 85vh;
`;
const Pojemnik = styled.div`
  height: 10vh;
  width: 100%;
  margin: 0
`




export default () => {
  return (




            <Content>
                <Container  style = {{padding: 0}}>
                    <Pojemnik>
                    <h1>temp menu</h1>
                    </Pojemnik>

                <Pojemnik>
                    <Link to='projects'>Projects</Link> {" "}
                </Pojemnik>
                <Pojemnik>
                    <Link to='matches'>matches</Link> {" "}
                </Pojemnik>

                <Pojemnik>
                    <Link to='profile'>profile</Link> {" "}
                </Pojemnik>

            <Link to='swipe'>swipe</Link> {" "}
                </Container>
            </Content>





  );
}



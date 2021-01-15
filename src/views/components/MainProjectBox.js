import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import ProjectBox from './ProjectBox'
import styled from "styled-components";


export default () => {
  return (
    <div>
        <TitleLine>
            <Title>
                Health Point
            </Title>
        </TitleLine>
        <ProjectBox /> 
    </div>
  );
}

const TitleLine = styled.div`
    margin-top: 40px; 
    padding-left: 20px; 
    background: #ACF2D3;
    box-sizing: border-box;
    background-color:#ACF2D3;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const Title = styled.h1`
    padding: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    color: #6D6969;
`
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import ProjectBox from './ProjectBox'
import styled from "styled-components";
import prjData from "../../data/projects.json";


export default () => {
    return (
        <div>
            <TitleLine>
                <Title>
                    Health Point
                </Title>
            </TitleLine>
            <ProjectBox data={prjData[0]} />
        </div>
    );
}

const TitleLine = styled.div`
    background-color:#ACF2D3;
    padding-top: 10px;
    padding-left: 20px; 
    background: #ACF2D3;
    border: 1px solid #36DA51;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const Title = styled.h1`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    color: #6D6969;
`
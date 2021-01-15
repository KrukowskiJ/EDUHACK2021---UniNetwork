import React from 'react';
import styled from "styled-components";

export default (props) => {
  return (
    <Box>
        <Title>
            {props.skill}
        </Title>
    </Box>
  );
}

const Box = styled.div`
    background: #ACF2D3;
    border-radius: 40px;
    padding-left:10px;
    padding-right: 10px; 
    margin: 5px;
    border: 3px solid #ACF2D3;
`

const Title = styled.h1`
    font-size: 15px;
    font-family: Roboto;
    margin: auto;
    font-style: normal;
`
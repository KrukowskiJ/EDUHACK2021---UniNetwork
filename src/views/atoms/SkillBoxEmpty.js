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
    border-radius: 40px;
    padding-left:10px;
    padding-right: 10px; 
    margin: 5px;
    border: 1px solid #ACF2D3;

`

const Title = styled.h1`
    font-size: 15px;
    font-family: Roboto;
    margin: auto;
    color: #ACF2D3;
    font-style: normal;
`
import React from 'react';
import styled from "styled-components"

export default () => {
  return (
    <>
      <Title>Swipe</Title>
      <GreenBox />
      <CardBorder>
        content
      </CardBorder>
    </>
  );
}

const CardBorder = styled.div`
border:solid 5px #4C6C84;
border-top: solid 20px #ACF2D3;

`
const GreenBox = styled.div`


`
const Title = styled.div`


`
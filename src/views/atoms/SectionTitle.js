import React from 'react';
import styled from "styled-components";

export default (props) => {
  return (
    <Title>
      {props.title}
    </Title>
  );
}

const Title = styled.h3`
    color: #4FB084;
    margin: auto;
    text-align: center;
    font-size: 40px;
    font-weight: bold;
    margin:1em;
`
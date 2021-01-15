import React from 'react';
import styled from "styled-components";

export default (props) => {
  return (
    <Header>
      {props.title}
    </Header>
  );
}


const Header = styled.div`
    color: #ACF2D3;
    margin: auto;
    text-align: center;
    font-size: 40px;
`
import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Heading = styled.div`
    height: 8vh;
    width: 100vw;
    color: red;
    background: #4C6C84;
    margin: 0;
    
`;

export default () => {
  return (

        <Heading>
            <Link to='swipe'>swipe</Link> {" "}
      <h1>temp menu</h1>
      <Link to='projects'>Projects</Link> {" "}
      <Link to='matches'>matches</Link> {" "}
      <Link to='profile'>profile</Link> {" "}

        </Heading>


   

  );
}


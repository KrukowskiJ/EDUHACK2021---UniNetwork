import React from 'react';
import styled from 'styled-components'
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

import imageMatches from './../../img/match.png'
import imageSearch from './../../img/search.png'
import imageArrow from './../../img/arrow.png'


const Content = styled.div`
  background: #D0D0D0;
  margin: 0;
  height: 89vh;
 
  
`;
const Pojemnik = styled.div`
  height: 10vh;
  width: 100%;
  margin: 0
`

const Zielony = styled.div`
  height: 5%;
  width: 100%;
  background: #ACF2D3;
`

const Przerwa = styled.div`
  height: 5%;
  width: 100%;
  
`

const Swipe = styled.div`
  height: 10%;
  width: 100%;
  background: #ACF2D3;
`

const Arrow = styled.img`
  height: 50%;
   margin: 3%;
  float: left;

`
const TextSwipe = styled.div`

`

const Matches = styled.div`
  height: 10%;
  width: 100%;
  
`
const ImageMatch = styled.img`
  height: 50%;
  
  margin: 3%;
  float: left;
`

const TextMatch = styled.div`
  
  float: left;
  text-align: center;
`

const ImageSearch = styled.img`
    height: 50%;
    margin: 3%;
    float: left;
`

const Search = styled.div`
  height: 10%;
  width: 100%;
`
const TextSearch = styled.div`
  
`

const PojemnikZdjecie = styled.div`
  height: 100%;
  width: 30%;
  float: left;
`

export default () => {
  return (




            <Content>
                <Container  style = {{padding: 0, height:"100%", width: "100%"}}>
                    <Zielony/>
                    <Pojemnik>
                    <h1>temp menu</h1>
                    </Pojemnik>

                    <Przerwa></Przerwa>

                <Swipe>
                    <Link to='projects'>
                    <PojemnikZdjecie>
                        <Arrow src = {imageArrow}></Arrow>
                    </PojemnikZdjecie>
                        <TextMatch> Swipe Projects </TextMatch>
                        <div style={{clear: "both"}}></div>
                    </Link> {" "}
                </Swipe>
                <Matches>
                    <Link to='matches'>
                        <PojemnikZdjecie>
                         <ImageMatch src = {imageMatches}></ImageMatch>
                        </PojemnikZdjecie>
                            <TextMatch> Match </TextMatch>
                        <div style={{clear: "both"}}></div>

                    </Link> {" "}
                </Matches>

                <Search>
                    <Link to='profile'>
                        <PojemnikZdjecie>
                            <ImageSearch src = {imageSearch}/>
                        </PojemnikZdjecie>

                        <TextSearch>Find Project</TextSearch>
                        <div style={{clear: "both"}}></div>
                    </Link> {" "}
                </Search>

            <Link to='swipe'>swipe</Link> {" "}
                </Container>
            </Content>





  );
}



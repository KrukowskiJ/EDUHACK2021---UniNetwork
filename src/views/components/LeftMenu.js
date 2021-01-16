import React from 'react';
import styled from 'styled-components'
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

import imageMatches from './../../img/match.png'
import imageSearch from './../../img/search.png'
import imageArrow from './../../img/arrow.png'

import imageSwitch from './../../img/search.png'


const Content = styled.div`
  background: #F6F6F6;
  margin: 0;
  height: 87.5vh;
 
  
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
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

const Przerwa = styled.div`
  height: 5%;
  width: 100%;
  
`

const SwipeProject = styled.div`
  height: 10%;
  width: 100%;
  background: #ACF2D3;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

const ImageArrow = styled.img`
  height: 50%;
   margin-left: 20px;
   margin-top: 15%;
  float: left;

`
const TextSwipeProject = styled.div`
    font-family: Roboto;
    color: black;

`

const Matches = styled.div`
  height: 10%;
  width: 100%;
  
`
const ImageMatch = styled.img`
  height: 50%;
  margin-left: 20px;
  margin-top: 13%;
  float: left;
`

const TextMatch = styled.div`
  padding-top: 6.5%;
  float: left;
  text-align: center;
  font-family: Roboto;
  color: black;
`

const ImageSearch = styled.img`
   height: 50%;
  margin-left: 20px;
  margin-top: 13%;
  float: left;
`

const Search = styled.div`
  height: 10%;
  width: 100%;
`
const TextSearch = styled.div`
    padding-top: 6.5%;
  float: left;
  text-align: center;
  font-family: Roboto;
  color: black;
`

const PojemnikZdjecie = styled.div`
  height: 100%;
  width: 30%;
  float: left;
`

const Switch = styled.div`
  height: 10%;
  width: 100%;
`

const ImageSwitch = styled.img`
   height: 50%;
  margin-left: 20px;
  margin-top: 13%;
  float: left;
`

const ZielonyDol = styled.div`
  position: absolute;
  height: 5%;
  width: 100%;
  bottom: 0;
  background: #ACF2D3;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`


export default () => {
  return (




            <Content>
                <Container  style = {{padding: 0, height:"100%", width: "100%"}}>
                    <Zielony/>
                    <Pojemnik>

                    </Pojemnik>

                    <Przerwa></Przerwa>

                <SwipeProject>
                    <Link to='swipe'>
                    <PojemnikZdjecie>
                        <ImageArrow src = {imageArrow}></ImageArrow>
                    </PojemnikZdjecie>
                        <TextMatch> Swipe Projects </TextMatch>
                        <div style={{clear: "both"}}></div>
                    </Link> {" "}
                </SwipeProject>
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
                    <Link to='projects'>
                        <PojemnikZdjecie>
                            <ImageSearch src = {imageSearch}/>
                        </PojemnikZdjecie>

                        <TextSearch>Find Project</TextSearch>
                        <div style={{clear: "both"}}></div>
                    </Link> {" "}
                </Search>

                <Search>
                    <Link to='addProject'>
                        <PojemnikZdjecie>
                            <ImageSearch src = {imageSearch}/>
                        </PojemnikZdjecie>

                        <TextSearch>Add Project</TextSearch>
                        <div style={{clear: "both"}}></div>
                    </Link> {" "}
                </Search>


                    <Switch>
            <Link to='profile'>
                <PojemnikZdjecie>
                    <ImageSwitch src = {imageSwitch}></ImageSwitch>
                </PojemnikZdjecie>
                <TextMatch> Switch </TextMatch>
            </Link> {" "}
                    </Switch>

                    <ZielonyDol/>
                    <div style={{clear: "both"}}></div>
                </Container>
            </Content>





  );
}



import React from "react";
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

import imageMatches from "./../../img/match.png";
import imageSearch from "./../../img/search.png";
import imageArrow from "./../../img/arrow.png";
import imageProfile from "./../../img/profile.png";
import imageSwitch from "./../../img/search.png";

const Content = styled.div`
  background: #f6f6f6;
  margin: 0;
  height: 87.5vh;
`;
const Pojemnik = styled.div`
  height: 10vh;
  width: 100%;
  margin: 0;
`;

const Zielony = styled.div`
  height: 5%;
  width: 100%;
  background: #acf2d3;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const Przerwa = styled.div`
  height: 5%;
  width: 100%;
`;

const TextMatch = styled.div`
  padding-top: 6.5%;
  float: left;
  text-align: center;
  font-family: Roboto;
  color: black;
`;

const ImageSearch = styled.img`
  height: 30px;
  width: 30px;
  margin-left: 20px;
  margin-top: 13%;
  float: left;
`;

const TextSearch = styled.div`
  padding-top: 6.5%;
  float: left;
  text-align: center;
  font-family: Roboto;
  color: black;
`;

const PojemnikZdjecie = styled.div`
  height: 100%;
  width: 30%;
  float: left;
`;

const ZielonyDol = styled.div`
  position: absolute;
  height: 5%;
  width: 100%;
  bottom: 0;
  background: #acf2d3;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const TabBox = styled.div`
  height: 10%;
  width: 100%;
`;

const StyledLink = styled(NavLink)`
  display: block;
  font-family: Roboto;

  &:hover {
    text-decoration: underline;
  }
  :active {
    color: #acf2d3; !important
  }
`;

export default () => {
  return (
    <Content>
      <Container style={{ padding: 0, height: "100%", width: "100%" }}>
        <Zielony />
        <Pojemnik></Pojemnik>

        <Przerwa></Przerwa>

        <TabBox>
          <StyledLink c to="swipe">
            <PojemnikZdjecie>
              <ImageSearch src={imageArrow}></ImageSearch>
            </PojemnikZdjecie>
            <TextMatch> Swipe Projects </TextMatch>
            <div style={{ clear: "both" }}></div>
          </StyledLink>{" "}
        </TabBox>
        <TabBox>
          <StyledLink c to="matches">
            <PojemnikZdjecie>
              <ImageSearch src={imageMatches}></ImageSearch>
            </PojemnikZdjecie>
            <TextMatch> Match </TextMatch>
            <div style={{ clear: "both" }}></div>
          </StyledLink>{" "}
        </TabBox>

        <TabBox>
          <StyledLink c to="projects">
            <PojemnikZdjecie>
              <ImageSearch src={imageSearch} />
            </PojemnikZdjecie>

            <TextSearch>Find Project</TextSearch>
            <div style={{ clear: "both" }}></div>
          </StyledLink>{" "}
        </TabBox>

        <TabBox>
          <StyledLink to="addProject">
            <PojemnikZdjecie>
              <ImageSearch src={imageSearch} />
            </PojemnikZdjecie>

            <TextSearch>Add Project</TextSearch>
            <div style={{ clear: "both" }}></div>
          </StyledLink>{" "}
        </TabBox>

        <TabBox>
          <StyledLink to="profile">
            <PojemnikZdjecie>
              <ImageSearch src={imageProfile} />
            </PojemnikZdjecie>

            <TextSearch>Profile</TextSearch>
            <div style={{ clear: "both" }}></div>
          </StyledLink>{" "}
        </TabBox>
        <ZielonyDol />
        <div style={{ clear: "both" }}></div>
      </Container>
    </Content>
  );
};

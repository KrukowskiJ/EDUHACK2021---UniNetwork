import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Matches from './views/Matches';
import Profile from './views/Profile';
import ProjectList from './views/ProjectList';
import Swipe from './views/Swipe';
import TopMenu from "./views/components/TopMenu";
import LeftMenu from "./views/components/LeftMenu";
import { Container, Row, Col } from 'react-bootstrap'


function App() {
  return (
    <Router>
      <TopMenu />
      <Container fluid={true}>
        <Row>
          <Col md={4} style = {{padding: 0}}>
            <LeftMenu />
          </Col>
          <Col md={8}>

            <div className="container">
              <Route exact path="/" component={Swipe} />
              <Route path="/projects" component={ProjectList} />
              <Route exact path="/matches" component={Matches} />
              <Route path="/profile" component={Profile} />
              <Route path="/swipe" component={Swipe} />
            </div>

          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;

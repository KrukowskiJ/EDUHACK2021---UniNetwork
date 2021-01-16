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
import Login from "./views/Login"

import { Container, Row, Col } from 'react-bootstrap'
import PerfectScrollbar from 'react-perfect-scrollbar'
import Chat from './views/Chat'

function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <TopMenu />
      <Container fluid={true} >
        <Row>
          <Col xs={3} style={{ padding: 0 }}>
            <LeftMenu />
          </Col>
          <Col xs={9}>
            <div className="container">
              <Route path="/projects" component={ProjectList} />
              <Route exact path="/matches" component={Matches} />
              <Route path="/profile" component={Profile} />
              <Route path="/swipe" component={Swipe} />
              <Route path="/chat" component={Chat} />
            </div>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;

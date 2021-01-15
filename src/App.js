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
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'

function App() {
  return (
    <div>
      <TopMenu/>
      <Container>
        <Row>
          <Col md={4}>
              <LeftMenu />
          </Col>
          <Col md={8}>
            <Router>
              <div className="container">
                <Route exact path="/" component={Swipe} />
                <Route path="/projects" component={ProjectList} />
                <Route exact path="/matches" component={Matches} />
                <Route path="/profile" component={Profile} />
              </div>
            </Router>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

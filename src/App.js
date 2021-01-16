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
import PerfectScrollbar from 'react-perfect-scrollbar'
import AddProject from './views/AddProject'

function App() {
  return (
    <Router>
      <TopMenu />
      <Container fluid={true} >
        <Row>
          <Col md={3} style = {{padding: 0}}>
            <LeftMenu />
          </Col>
          <Col>

            <div className="container">
              <Route exact path="/" component={Swipe} />
              <Route path="/projects" component={ProjectList} />
              <Route exact path="/matches" component={Matches} />
              <Route path="/profile" component={Profile} />
              <Route path="/swipe" component={Swipe} />
              <Route path="/addProject" component={AddProject} />
            </div>

          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;

import React, { Component } from 'react';
import { Button,Grid,Row,Col } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <code>{'<Col xs={12} md={8} />'};</code>
            </Col>
            <Col xs={6} md={4}>
              <code>{'<Col xs={6} md={4} />'}</code>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import Deck from './Components/Deck';
import NavbarFull from './Components/NavbarFull';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarFull/>
        <Container>
          <Deck/>
        </Container>
      </div>
    );
  }
}

export default App;

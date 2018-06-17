import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import { Container } from 'reactstrap';
import Deck from './Components/Deck';
import NavbarFull from './Components/NavbarFull';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavbarFull/>
          <Container>
            <Route path="/:id" component={Deck} />
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;

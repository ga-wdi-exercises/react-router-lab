import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/home">About</Link>
            <Link to="/about">Home</Link>
          </nav>
        </div>
      </Router>
    );
  }
}

export default App;

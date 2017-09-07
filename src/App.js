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
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            </nav>
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import './App.css';
import Stock from './Stock/Stock.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="nav">
            <h2>Stockzzz</h2>
            <Link to="/Dashboard">Home</Link>
            <Link to="/About">About</Link>
          </nav>
          <main>
            <Route
              path="/Dashboard"
              component={Stock} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;

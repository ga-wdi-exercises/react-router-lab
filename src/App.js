import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import './App.css';

import Dashboard from './Dashboard/Dashboard.js'
import About from './About/About.js'
import Stock from './Stock/Stock.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Redirect to="/home"/>
        <h1><Link to="/home">Stocks!!!</Link></h1>
        <nav className="nav">
          <Link to="/home">Home | </Link>
          <Link to="/about">About</Link>
        </nav>
        <Route
          path="/home"
          component={Dashboard}
        />
        <Route
          path="/about"
          component={About}
        />
        <Route
          path="/stocks/:symbol"
          component={Stock}
        />
      </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Dashboard from './Dashboard'
import About from './About'
import Stock from './Stock'
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom"
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <nav>
            <h1>React-Router-Lab</h1>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>

          <main>

          <Route exact path="/" render={() => <Dashboard/>} />
          <Route path="/about" component={About} />
          <Route path="/stocks/:symbol" component={Stock} />

          </main>

        </div>
      </Router>
    );
  }
}

export default App;

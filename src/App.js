import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import './App.css';
import Stocks from './Stocks/Stocks.js'
import $ from 'jquery'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="nav">
            <h2>Stockzzz</h2>
            <Link to="/Stocks">Home</Link>
            <Link to="/About">About</Link>
          </nav>
          <main>
            <Route
              path="/Stocks"
              component={Stocks} />

          </main>
        </div>
      </Router>
    );
  }
}

export default App;

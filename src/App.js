import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import Data from "../data/stock-data.json"
import Dashboard from "./Dashboard.js"
import About from "./About.js"
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      stocks: Data
    }
  }

  render() {
    return (
      <Router>
        <div>
          <div className="nav">
            <div className="nav-item"><span className="nav-logo">iStocks</span></div>
            <div className="nav-item"><Link to="/">Home</Link></div>
            <div className="nav-item"><Link to="/search">Search</Link></div>
            <div className="nav-item"><Link to="/about">About</Link></div>
          </div>
          <Dashboard
            stocks={this.state.stocks}
          />
        <Route
          path="/about"
          render={() => <About />}
        />
        </div>
      </Router>
    );
  }
}

export default App;

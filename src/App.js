import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import './App.css';
import About from "./About"
import axios from "axios"
import Dashboard from "./Dashboard"
import Stock from "./Stock"


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      stocks: []
    }
  }
  render() {
    return (
      <Router>
        <div className="route-wrapper">

          <div className="header">
            <div className="nav-link"><Link to="/">Home</Link></div>
            <div className="nav-link"><Link to="/about">About</Link></div>
          </div>

          <div className="body">
            <Route exact path="/" render={()=> <Dashboard stocks={this.state.stocks} />} />
            <Route path="/about" component={About} />
            <Route path="/stocks/:symbol" component={Stock} />
          </div>
        </div>

      </Router>
    );
  }
}

export default App;

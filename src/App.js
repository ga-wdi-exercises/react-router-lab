import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import Dashboard from "./Dashboard/Dashboard.js"
import Stock from "./Stock/Stock.js"
import About from "./About/About.js"
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div></div>
      </Router>
    );
  }
}

export default App;

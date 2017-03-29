import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import Dashboard from "./Dashboard"
import Stock from "./Stock"
import About from "./About"
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      stocks: [
        {name: "Booz", symbol: "BAH", lastPrice: 35.63, change: -0.19, high: 35.88, low: 35.58, open: 35.77}
      ]
    }
  }
}

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

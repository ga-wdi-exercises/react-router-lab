import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import stockData from "../data/stock-data"
import './App.css';

class Home extends Component {
  render() {
    return(
      <div>
        {stockData.map ((stock, index) => (
            <h2 key={index}>{stock.name} {stock.symbol}</h2>
        ))}
      </div>
    )
  }
}

class About extends Component {
  render() {
    return(
      <div>About</div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;

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
            <h3 key={index}><Link to={`/stocks/${stock.symbol}`}>{stock.name} {stock.symbol}</Link></h3>
        ))}
      </div>
    )
  }
}

class About extends Component {
  render() {
    return(
      <div>
        <h3>Stock Tracking App</h3>
        <p>Track your favorite stock prices in real time. At Stock Tracking App,
        we care about your financial security.</p>
        <p>Sign up today</p>

      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/"><h2>Home</h2></Link></li>
            <li><Link to="/about"><h2>About</h2></Link></li>
          </ul>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;

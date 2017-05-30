import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import './App.css';
import stockData from "../data/stock-data"



class App extends Component {
  render() {
    let stocks = stockData.map((stock, index) => {
      return (
        <div key={index}>
          <p>{stock.name}</p>
          <p>{stock.symbol}</p>
          <p>{stock.lastPrice}</p>
        </div>
      )
    })
    return (
      <Router>
        <div>
        <p>Navbar</p>
          <nav>
              <div><Link to="/home">Home</Link></div>
              <div><Link to="/search">Search</Link></div>
           </nav>
           {stocks}
        </div>
      </Router>
    );
  }
}

export default App;

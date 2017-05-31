import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import './App.css';
import Dashboard from './Dashboard'
import Stock from './Stock'
import About from './About'
import Index from './Index'
import Search from './Search'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      stocks: [
        {name: "Verizon", symbol: "VZ", lastPrice: 46.20, volume: 3,709,618, high: 46.33, low: 45.33, open: 45.34},
        {name: "Microsoft Corporation", symbol: "MSFT", lastPrice: 70.41, volume: 4,788,282, high: 70.41, low: 69.77, open: 69.79},
        {name: "Nike.", symbol: "NKE", lastPrice: 52.92, volume: 2,130,859, high: 53.02, low: 52.64, open: 52.80},
        {name: "Cisco", symbol: "CSCO", lastPrice: 31.68, volume: 4,832,461, high: 31.81, low: 31.39, open: 31.39},
        {name: "Proctor & Gamble", symbol: "PG", lastPrice: 87.40, volume: 1,302,195, high: 87.60, low: 87.10, open: 97.25},
        {name: "Boeing", symbol: "BA", lastPrice: 168.88, volume: 547,807, high: 187.42, low: 186.21, open: 186.76}
      ]
    }
  }
  render() {
    return (
      <Router>
        <div>
          <div className="nav">
            <div className="nav-item"><span className="nav-logo">iStocks</span></div>
            <div className="nav-item"><Link to="/">Home</Link></div>
            <div className="nav-item"><Link to="/about">About</Link></div>
          </div>

          <div className="main">
            <Route exact path="/" render={() => <Dashboard stocks={this.state.stocks} />} />
            <Route path="/about" component={About} />
            <Route path="/stocks/:symbol" component={Stock} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

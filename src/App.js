import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom"
import Dashboard from './Dashboard.js';
import Stocks from './Stocks.js';
import About from './About.js';
import stockData from '../data/stock-data.json';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      stocks: stockData
    }
  }
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
          <Route exact path="/" render={() => <Dashboard stocks={this.state.stocks} />} />
          <Route path="/about" component={About} />
          <Route path="/stocks/:symbol" component={Stocks} />
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import './App.css';
import stocks from '../data/stock-data.json';
import Dashboard from "./Dashboard"

class App extends Component {
  constructor () {
    super()
      // axios.get('http://localhost:3000/stocks')
      // .then((response) => {
      this.state = {
        stocks: stocks
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
          <main>
            <Route
              exact
              path="/"
              render={() => <Dashboard stocks={this.state.stocks} />} 
            />
            <Route
              path="/stocks/:symbol"
              render={() => {
                return(
                  <div>
                    <h2>Stock Name (Stock Symbol)</h2>
                    <ul>
                      <li>Current Price: </li>
                      <li>Change: </li>
                      <li>High: </li>
                      <li>Low: </li>
                    </ul>
                  </div>
                )
              }}
            />
            <Route
              path="/search"
              render={() => {
                return(
                  <div className="search">
                    <h2>Search</h2>
                    <form>
                      <input type="text" />
                      <input type="submit" className="search-btn" value="Search" />
                    </form>
                    <div className="search-results">
                      Search result(s) goes here.
                    </div>
                  </div>
                )
              }}
            />
            <Route
              path="/about"
              render={() => {
                return(
                  <div className="about">
                    <h2>About</h2>
                  </div>
                )
              }}
            />
          </main> 
        </div>
      </Router>
    );
  }
}

export default App;

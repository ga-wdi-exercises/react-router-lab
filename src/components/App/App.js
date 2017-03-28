//Dependencies
import React, { Component } from 'react';
// import axios from 'axios'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

//Components
import Dashboard from '../Dashboard/Dashboard.js'

//Seed Data
import stockData from '../../../data/stock-data.json'

//CSS
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stocks: stockData
    }
  }
  render() {
    return (
      <Router>
        <div>
          <div>
            <div className="nav">
              <div className="nav-item"><span className="nav-logo">iStocks</span></div>
              <div className="nav-item"><Link to="/">Home</Link></div>
              <div className="nav-item"><Link to="/search">Search</Link></div>
              <div className="nav-item"><Link to="/about">About</Link></div>
            </div>
          </div>
          <main>
            <Route
              path="/"
              render={() => {
                return(
                  <Dashboard
                      stocks={this.state.stocks}
                  />
                )
              }}
            />
            <Route
              path="/about"
              render={() => {
                return(
                  <div>
                    <h1>Follow Your Stocks</h1>
                    <p>It is important to keep track of your stock. Our application helps you to do so.</p>
                  </div>
                )
              }}
            />
            <Route
              path="/*"
              render={() => {
                return <Redirect to="/" />
              }}
            />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;

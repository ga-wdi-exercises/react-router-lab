import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import './App.css';
import About from './About'
import Dashboard from './Dashboard'
import Stock from './Stock'
import data from '../data/stock-data.json'

class App extends Component {
  constructor(props) {
    super()
    this.state = {data}
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/dashboard">Home</Link>
            <Link to="/about">About</Link>
          </nav>
          <main>
            <Route
              path="/dashboard"
              render={(props) => {
                return (
                  <Dashboard
                    {...props}
                    stocks={ this.state.data }
                  />
                )
              }}
            />
            <Route
              path="/about"
              render={() => {
                return (
                <About />
                )
              }}
            />
            <Route
              path="/stocks/:symbol"
              render={(props) => {
                return (
                  <Stock
                    {...props}
                    stocks={ this.state.data }
                  />
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

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import Dashboard from "./Components/Dashboard.js"
import Stock from "./Components/Stock.js"
import './App.css';
import data from '../data/stock-data.json'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data
    }
  }


  render() {
    return (
      <Router>
        <div>
          <nav>
            <span>iStocks</span>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
          <main>
            <Route
              exact path="/"
              render={() => {
                return(
                  <Dashboard stocks={this.state.data} />
                )
              }}
            />
            <Route
              path="/stocks/:symbol"
              component={Stock}
            />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;

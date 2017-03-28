import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import Dashboard from "./Dashboard"
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>

          <Route path="/"
            render={() =>
              <Dashboard
                stocks={[
                  {"name": "Apple Inc.", "symbol": "AAPL", "lastPrice": 140.64, "change": -0.280000000000001, "high": 141.74, "low": 140.35, "open": 141.5},
                  {"name": "Microsoft Corporation", "symbol": "MSFT", "lastPrice": 64.98, "change": 0.109999999999999, "high": 65.45, "low": 64.76, "open": 65.12},
                ]}
              />
            }
          />

          <Route path="/about"

          />

        </div>
      </Router>
    );
  }
}

export default App;

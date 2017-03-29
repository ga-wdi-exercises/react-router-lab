import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import Dashboard from "./Components/Dashboard.js"
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <span>iStocks</span>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
          </nav>
          <main>
            <Route
              path="/"
              render={() => {
                return(
                  <Dashboard />
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

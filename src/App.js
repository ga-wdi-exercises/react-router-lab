import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import './App.css';

import Dashboard from "./dashboard"
import Stocks from "./stocks"




class App extends Component {
  render() {

    return (
      <Router>
        <div>
        <p>Navbar</p>
          <nav>
              <div><Link to="/dashboard">Home</Link></div>
              <div><Link to="/about">About</Link></div>
           </nav>
           <main>
            <Route
              path="/dashboard"
              render={() => {
                return(
                  <Dashboard />
                )
              }}
            />
            <Route
              path="/stocks/:symbol"
              component={Stocks}
            />
           </main>
        </div>
      </Router>
    );
  }
}

export default App;

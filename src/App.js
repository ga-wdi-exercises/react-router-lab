import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import './App.css';
import stockData from "../data/stock-data"
import Dashboard from "./dashboard"



class App extends Component {
  render() {

    return (
      <Router>
        <div>
        <p>Navbar</p>
          <nav>
              <div><Link to="/dashboard">Home</Link></div>
              <div><Link to="/search">Search</Link></div>
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
           </main>
        </div>
      </Router>
    );
  }
}

export default App;

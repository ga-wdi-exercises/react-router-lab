import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <nav>
          <h2>Stock Data</h2>
          <div>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
          </div>
        </nav>
        </div>
        <main>
        <Route
        path="/"
        render={() => {

        }}
        />
        </main>
      </Router>
    );
  }
}

export default App;

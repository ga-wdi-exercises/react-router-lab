import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import Search from './Search.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <h1>Stalking My Stocks</h1>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
          </nav>
          <main>
            <Search />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;

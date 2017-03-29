import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import SearchContainer from './SearchContainer.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <h1><a href="/">Stalking My Stocks</a></h1>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
          </nav>
          <main>
            <SearchContainer />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;

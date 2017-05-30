import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import './App.css';
import About from './About.js'
import Stocks from './Stocks.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="nav">
            <Link to="/stocks" className="nav-logo">StockStuff</Link>
            <Link to="/stocks">Stocks</Link>
            <Link to="/about">About</Link>
          </nav>
        <Route path="/" render={() => {
          return <Redirect to="/stocks" />
        }} />
        <Route path="/stocks" render={() => {
          return (
            <Stocks />
          )
        }} />
        <Route path="/about" render={() => {
          return (
            <About />
          )
        }} />
        </div>
      </Router>
    );
  }
}

export default App;

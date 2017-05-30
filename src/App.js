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
import Stock from './Stock.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="nav">
            <Redirect from="/" to="/stocks" />
            <Link to="/stocks" className="nav-logo">StockStuff</Link>
            <Link to="/stocks">Stocks</Link>
            <Link to="/about">About</Link>
          </nav>
          <main className="main">
            <Route exact path="/" component={Stocks}/>
            <Route exact path="/stocks" component={Stocks} />
            <Route exact path="/stocks/:symbol" component={Stock}/>
            <Route path="/about" component={About} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;

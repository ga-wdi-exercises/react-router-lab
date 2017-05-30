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
          <main className="main">
            <Route path="/" render={() => {
              return <Redirect to="/stocks" />
            }} />
            <Route path="/stocks" render={() => {
              return (
                <Stocks stocks={this.props.stocks} />
              )
            }} />
            <Route path="/about" component={About} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import './App.css';
import Dashboard from './components/Dashboard.js'
import Stock from './components/Stock.js'
import About from './components/About.js'
import data from '../data/stock-data.json'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: data
    }
  }
  render() {
    return (
      <Router>
        <div>
          <div className="nav">
            <div className="nav-item"><span className="nav-logo">iStocks</span></div>
            <div className="nav-item"><Link to="/">Home</Link></div>
            <div className="nav-item"><Link to="/search">Search</Link></div>
            <div className="nav-item"><Link to="/about">About</Link></div>
          </div>

          <div className="main">
            <Route exact path="/" render={() => <Dashboard data={this.state.data} />} />
            <Route path="/stocks/:symbol" component={Stock} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Dashboard from './Dashboard.js'
import Stock from './Stock.js'
import About from './About.js'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link,
  // Redirect
} from "react-router-dom"


class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router>
        <div>
          <div className="nav">
            <div className="nav-item"><span className="nav-logo">iStocks</span></div>
            <div className="nav-item"><Link to="/home">Home</Link></div>
            <div className="nav-item"><Link to="/search">Search</Link></div>
            <div className="nav-item"><Link to="/about">About</Link></div>
          </div>

          <main>
            <Route path='/home' render={() => {
                return (
                <Dashboard />
              )
              } }
            />
            <Route path="/about" component={About} />
            <Route path="/stocks/:symbol" component={Stock}/>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;

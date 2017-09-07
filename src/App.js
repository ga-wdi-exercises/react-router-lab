import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom"
import './App.css'
import Tracker from './Tracker.js'
import About from './About.js'
import data from '../data/stock-data.json'
import Stock from './Stock.js'
import Search from './Search.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data
    }
  }

  render() {
    return (
      <Router>
        <div>
          <nav className="nav">
            <h1>WDI Stock Tracker</h1>
            <Link to="/tracker" className="navLink">Home</Link>
            <Link to="/search" className="navLink">Search</Link>
            <Link to="/about" className="navLink">About</Link>
          </nav>
          <main>
            <Switch>
            <Route
              path="/tracker"
              render={(props) => {
                return (
                  <Tracker
                  // {...props}
                  stocks={ this.state.data }
                  // setTranslation={ (data, language) => this.setTranslation(data, language) }
                  />
                )
              }}
            />
            <Route
              path="/about"
              render={() => {
                return (
                  <About
                    // {...props}
                    // translation={ this.state.translation }
                    // language={this.state.langauge}
                  />
                )
              }}
            />
            <Route
              path="/stock/:symbol"
              component={Stock}
            />
            <Route
              path="/Search"
              component={Search}
            />
            <Route
              path="/*"
              render={() => {
                return (
                  <Redirect to="/tracker" />
                )
              }}
            />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;

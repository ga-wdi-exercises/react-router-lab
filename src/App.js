import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import Dashboard from './Dashboard'
import About from './About'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <h3>Outside Trader</h3>
            <Link to='/'>Dashboard</Link>
            <Link to='/about'>About</Link>
          </nav>
          <main>
            <Route
              path='/'
              render={() => {
                return(
                  <Dashboard />
                )
              }}
            />
            <Route
              path='/about'
              render={() => {
                return(
                  <About />
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

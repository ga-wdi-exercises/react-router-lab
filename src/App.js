import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import Dashboard from './Dashboard'
import About from './About'
import Stock from './Stock'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      stock: ''
    }
  }
  render() {
    return (
      <Router>
        <div>
          <nav>
            <h3>Outside Trader</h3>
            <Link to='/'>Dashboard </Link>
            <Link to='/about'>About </Link>
          </nav>
          <main>
            <Route
              exact path='/'
              render={() => {
                return(
                  <Dashboard />
                )
              }}
            />
            <Route
              path='stocks/stock'
              render={() => {
                return(
                  <Stock
                    stock= {this.state.stock}
                  />
                )
              }}
            />
            <Route
              path='/about'
              render={() => {
                return(
                  <About/>
                )
              }}
            />
            <Route
              path="/*"
              render={() => {
                return <Redirect to='/' />
              }}
            />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;

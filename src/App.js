import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

import './App.css'

import Dashboard from './Dashboard'
import About from './About'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Link to='/'>Home</Link>
          <Route
            path='/' render={() => {
              return (
                <Dashboard />
              )
            }}
          />
          <Route
            path='/' render={() => {
              return (
                <About />
              )
            }}
          />
          <Route
            path='/' render={() => {
              return (
                <About />
              )
            }}
          />
        </div>
      </Router>
    )
  }
}

export default App

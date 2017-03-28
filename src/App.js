import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
  // , Redirect
} from "react-router-dom"
import Dashboard from './Dashboard.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <h1>React Stocks</h1>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
          <main>
            <Route
              path="/"
              render={() => {
                return (
                  <Dashboard />
                )
              }}
            />
          </main>
        </div>
      </Router>
    )
  }
}

export default App

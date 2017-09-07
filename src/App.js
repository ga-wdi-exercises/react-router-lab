import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css'
import Tracker from './Tracker.js'
import About from './About.js'
import data from '../data/stock-data.json'
import Info from './Info.js'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data
    }
  }
  render () {
    return (
      <Router>
        <div>
          <nav>
            <h1>Stock Tracker</h1>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
          </nav>
          <main>
            <Route
              path='/home'
              render={(props) => {
                return (
                  <Tracker stocks={this.state.data} />
                )
              }}
            />
            <Route
              path='/stocks/:symbol'
              component={Info}
            />
            <Route
              path='/about'
              render={() => {
                return (
                  <About />
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

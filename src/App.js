import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import axios from 'axios'

import './App.css'

import Search from './Search'
import Dashboard from './Dashboard'
import About from './About'
import Stock from './Stock'

class App extends Component {

  constructor () {
    super()

    this.state = {
      stocks: [],
      tracked: false
    }

    this.handleTrackedState = this.handleTrackedState.bind(this)
  }

  componentDidMount () {
    axios.get('http://localhost:3000/stocks').then((response) => {
      this.setState({
        stocks: response.data
      })
    })
  }

  handleTrackedState (newStock) {
    let tempArray = this.state.stocks
    tempArray.push(newStock)
    this.setState({
      stocks: tempArray,
      tracked: true
    })
  }

  render () {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/search'>Search</Link>
              </li>
            </ul>
          </nav>
          <main>
            <Route
              exact path='/' render={() => {
                return (
                  <Dashboard stocks={this.state.stocks} />
                )
              }}
            />
            <Route
              path='/about' render={() => {
                return (
                  <About />
                )
              }}
            />
            <Route
              path='/stocks/:symbol' render={(props) => {
                return (
                  <Stock stock={props.location.state} />
                )
              }}
            />
            <Route
              path='/search' render={() => {
                if (this.state.tracked) {
                  return <Redirect to='/' />
                }
                return (
                  <Search handleTrackedState={this.handleTrackedState} />
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

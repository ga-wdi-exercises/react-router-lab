import React, { Component } from 'react'
import axios from 'axios'
import About from './About'
import Dashboard from './Dashboard'
import Search from './Search'
import Stock from './Stock'
// import data from '../data/stock-data.json'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'
import './App.css'

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Router>
        <div>
          <div className='nav'>
            <div className='nav-item'><span className='nav-logo'>iStocks</span></div>
            <div className='nav-item'><Link to='/'>Home</Link></div>
            <div className='nav-item'><Link to='/about'>About</Link></div>
            <div className='nav-item'><Link to='/search'>Search</Link></div>
          </div>
          <main>
            <Switch>
              <Route
                path='/about'
                component={About}
              />
              <Route
                path='/stocks/:symbol'
                component={Stock}
              />
              <Route
                path='/search'
                component={Search}
              />
              <Route
                path='/'
                component={Dashboard}
              />
            </Switch>
          </main>

        </div>
      </Router>
    )
  }
}

export default App

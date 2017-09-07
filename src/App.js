import React, { Component } from 'react'
import About from './About'
import Dashboard from './Dashboard'
import data from '../data/stock-data.json'
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
    this.state = {data}
  }
  render () {
    return (
      <Router>
        <div>
          <div className='nav'>
            <div className='nav-item'><span className='nav-logo'>iStocks</span></div>
            <div className='nav-item'><Link to='/'>Home</Link></div>
            <div className='nav-item'><Link to='/about'>About</Link></div>
          </div>
          <main>
            <Switch>
              <Route
                path='/about'
                render={(props) => {
                  return (
                    <About />
                  )
                }}
              />
              <Route
                path='/'
                render={(props) => {
                  return (
                    <Dashboard stocks={this.state.data}/>
                  )
                }}
              />
            </Switch>
          </main>

        </div>
      </Router>
    )
  }
}

export default App

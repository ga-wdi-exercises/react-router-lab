import React, { Component } from 'react'
import About from './About'
import Dashboard from './Dashboard'
import Stock from './Stock'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
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
          <nav className='nav'>
            <h1>dem stocks</h1>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
          </nav>
          <div className='main-page'>
            <Route exact path='/' render={() => <Dashboard />} />
            <Route path='/about' component={About} />
            <Route path='/stocks/:symbol' component={Stock} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App

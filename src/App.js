import React, { Component } from 'react'
import About from './About'
// import data from '../data/stock-data.json'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import './App.css'

class App extends Component {

  render () {
    return (
      <Router>
        <div>
          <div className='nav'>
            <div className='nav-item'><Link to='/'>Home</Link></div>
            <div className='nav-item'><Link to='/about'>About</Link></div>
          </div>
          <main>
            <Switch>
              <Route
                path='/about'
                component={About}
              />
            </Switch>
          </main>

        </div>
      </Router>
    )
  }
}

export default App

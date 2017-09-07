import React, { Component } from 'react';
import Dashboard from './Dashboard.js'
import About from './About.js'
import data from '../data/stock-data.json'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      data
    }
  }
  render() {
    return (
      <Router>
          <div>
            <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            </nav>
            <main>
              <Route exact path ="/"
                render={(props) => {
                  return (< Dashboard
                    {...props}
                    stocks={ this.state.data }
                    />)
                }}
              />
              <Route path ="/about"
                render={() => {
                  return (< About  />)
                }}
              />
            </main>
        </div>
      </Router>
    );
  }
}

export default App;

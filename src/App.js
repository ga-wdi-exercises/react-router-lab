import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import './App.css';
import About from './About'
import Dashboard from './Dashboard'
import data from '../data/stock-data.json'

class App extends Component {
  constructor(props) {
    super()
    this.state = {data}
    // console.log('data: ' + data)
    // console.log('state: ' + this.state.data)
  }

  // setData (data) {
  //   this.setState({
  //     data: data
  //   })
  // }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/dashboard">Home</Link>
            <Link to="/about">About</Link>
          </nav>
          <main>
            <Route
              path="/dashboard"
              render={(props) => {
                return (
                  <Dashboard
                    {...props}
                    stocks = { this.state.data }
                  />
                )
              }}
            />
            <Route
              path="/about"
              render={() => {
                return (
                <About />
                )
              }}
            />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;

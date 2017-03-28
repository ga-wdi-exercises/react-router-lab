import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom"
import './App.css';
import Home from './Home.js'
import Search from './Search.js'
import About from './About.js'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="Container">
      <div className="nav">
        <div className="nav-item"><span className="nav-logo">iStocks</span></div>
        <div className="nav-item"><Link to="/Home">Home</Link></div>
        <div className="nav-item"><Link to="/Search">Search</Link></div>
        <div className="nav-item"><Link to="/About">About</Link></div>
      </div>
      <main>
        <Route
          path="/Home"
          render={() => {
            return <Home/>
          }}
          />
          <Route
            path="/Search"
            render={() => {
              return <Search/>
            }}
            />
            <Route
              path="/About"
              render={() => {
                return <About/>
              }}
              />
      </main>
      </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import './App.css';
import stockData from '../data/stock-data.json';
import Dashboard from './components/Dashboard/Dashboard'
import About from './components/About/About'
import Stock from './components/Stock/Stock'

class App extends Component {
  constructor(){
    super()
    this.state = {
      data: stockData
    }
  }
  render() {
    return (
      <Router>
        <div>
          <nav className="nav">
            <div className="nav-item"><span className="nav-logo">iStocks</span></div>
            <div className="nav-item">
              <Link to="/home">Home</Link>
            </div>
            <div className="nav-item">
              <Link to="/about">About</Link>
            </div>
          </nav>

          <main>
            <Route
              path="/home"
              render={ () => {
                return(
                  <Dashboard data={this.state.data}/>
                )
              }}
            />
            <Route
              path="/about"
              render={ () => {
                return(
                  <About />
                )
              }}
            />
            <Route
              path="/stocks/:symbol"
              component={Stock}
            />
            <Route
              path="/*"
              render={() => {
                return <Redirect to="/home" />
              }}
            />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;

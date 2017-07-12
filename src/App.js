import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import './App.css';
import About from './About'
import StockList from './StockList'

class App extends Component {
  constructor(){
    super()
  }
  render() {
    return (
      <Router>
        <div>
          <nav className="nav">
            <div className="nav-item"><span className="nav-logo">iStocks</span></div>
            <div className="nav-item"><Link to="/home">Home</Link></div>
            <div className="nav-item"><Link to="/search">Search</Link></div>
            <div className="nav-item"><Link to="/about">About</Link></div>
          </nav>
          <main>
            <Route path="/home" render={ ()=>{
              return(
                <StockList />
              )
            }}/>
            <Route path="/stocks/:symbol" render={ ()=>{
              return()
            }}/>
            <Route path="/about" render={ ()=>{
              return(
                <About />
              )
            }}/>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;

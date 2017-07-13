import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import Dashboard from "./Dashboard.js"
import Stocks from '../data/stock-data.json'
import About from './About.js'
import './App.css';

class App extends Component {
  constructor(){
    super()
      this.state = {
        stocks: Stocks
      }
  }
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
          </nav>
          <Dashboard />
          <About />
          <main>
            <Route
              path="/home"
              render={()=> {
                return(
                  <div>
                    <Dashboard stocks={this.state.stocks} />
                  </div>
                )
              }}
            />
            <Route
              path="/about"
              render={()=> {
                return(
                  <div>
                    <About about={About} />
                  </div>
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

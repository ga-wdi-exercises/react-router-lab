import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import './App.css';
import Dashboard from './Dashboard.js'
import About from './About.js'
import Stock from './Stock.js'
import data from '../data/stock-data.json'

class App extends Component {

  constructor(){
    super()

    this.state = {
      data
    }
  }





  render() {
    return (
      <Router>
        <div>



          <div>
            <div>     <Link to= "/"> HOME </Link>     </div>
            <div>     <Link to = "/about"> ABOUT </Link>     </div>
          </div>

          
          <div>
            <Route
              path="/"
              render={() => {
                return (
                  <Dashboard stocks={this.state.data}  />
                )
              }}
            />
            <Route    path="/about" render = {About} />
            <Route    path="/stocks/:symbol" render={Stock} />
          </div>


        </div>
      </Router>
    );
  }
}

export default App;

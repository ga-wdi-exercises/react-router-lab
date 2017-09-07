import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import './App.css';
import data from '../data/stock-data.json'

class App extends Component {

  constructor(){
    super()

    this.state = {data}
  }





  render() {
    return (
      <Router>
        <div>


          //header
          <div>
            <div>     <Link to= "/"> HOME </Link>     </div>
            <div>     <Link to = "/about"> ABOUT </Link>     </div>
          </div>

          //main
          <div>
            <Route    path="/" render= { (e) => <Dashboard stocks = this.state.data  />}           />
            <Route    path="/about" component = {About} />
            <Route    path="/stocks/:symbol" component={Stock} />
          </div>


        </div>
      </Router>
    );
  }
}

export default App;

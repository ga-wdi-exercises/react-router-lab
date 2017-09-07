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

        




        </div>
      </Router>
    );
  }
}

export default App;

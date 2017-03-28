import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom"
import Home from "./Home.js"
import About from "./About.js"
import Particular from "./Particular.js"
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      stocks: [
        {name: "this is a name1", symbol: "symbol1", lastPrice: "this is the last price", change: "this is the change", high: "this is the high", low: "this is the low", open: "this is the opening price"},
        {name: "this is a name2", symbol: "symbol2", lastPrice: "this is the last price", change: "this is the change", high: "this is the high", low: "this is the low", open: "this is the opening price"},
        {name: "this is a name3", symbol: "symbol3", lastPrice: "this is the last price", change: "this is the change", high: "this is the high", low: "this is the low", open: "this is the opening price"},
        {name: "this is a name4", symbol: "symbol4", lastPrice: "this is the last price", change: "this is the change", high: "this is the high", low: "this is the low", open: "this is the opening price"},
        {name: "this is a name5", symbol: "symbol4", lastPrice: "this is the last price", change: "this is the change", high: "this is the high", low: "this is the low", open: "this is the opening price"},
        {name: "this is a name6", symbol: "symbol5", lastPrice: "this is the last price", change: "this is the change", high: "this is the high", low: "this is the low", open: "this is the opening price"},
        {name: "this is a name7", symbol: "symbol6", lastPrice: "this is the last price", change: "this is the change", high: "this is the high", low: "this is the low", open: "this is the opening price"},
        {name: "this is a name8", symbol: "symbol7", lastPrice: "this is the last price", change: "this is the change", high: "this is the high", low: "this is the low", open: "this is the opening price"}
      ]
    }
  }
  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
          </div>
          <div>
            <Route path="/home" render={() => <Home stocks={this.state.stocks} />}/>
            <Route path="/about" component={About}/>
            <Route path="/stocks/:name" component={Particular}/>
          </div>
        </div>
      </Router>
    )
  }
}

export default App

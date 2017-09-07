import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom"
import './App.css'
import Tracker from './Tracker.js'
import About from './About.js'
import data from '../data/stock-data.json'
import Stock from './Stock.js'
import Search from './Search.js'
import axios from 'axios'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      stocks: [],
      hasTracked: false
    }
    this.handleTrackedState = this.handleTrackedState.bind(this)
  }
  componentDidMount(){
    axios.get("http://localhost:3000/stocks").then((response) => {
      this.setState({
        stocks: response.data
      })
    })
  }
  handleTrackedState(newStock){
    let tempArray = this.state.stocks
    tempArray.push(newStock)
    this.setState({
      stocks: tempArray,
      hasTracked: true
    })
  }

  render() {
    return (
      <Router>
        <div>
          <nav className="nav">
            <h1>WDI Stock Tracker</h1>
            <Link to="/tracker" className="navLink">Home</Link>
            <Link to="/search" className="navLink">Search</Link>
            <Link to="/about" className="navLink">About</Link>
          </nav>
          <main>
            <Switch>
              <Route exact path="/" render={() => <Tracker stocks={this.state.stocks} />} />
              <Route path="/search" render={() => {
                if(this.state.hasTracked){
                  return <Redirect to="/" />
                }
                return <Search handleTrackedState={this.handleTrackedState} />
              }} />
            <Route path="/about" component={About} />
            <Route path="/stocks/:symbol" component={Stock} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;

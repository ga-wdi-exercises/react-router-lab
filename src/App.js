import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import stockData from '../data/stock-data'
import './App.css';





class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/search">Search</Link></li>
        <hr/>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/search" component={Search}/>
        </div>
      </Router>
    )
  }
}

class Home extends Component {
  render() {
    console.log(stockData)
    return (
      <div>
      <h2>Home</h2>
      {stockData.map((stock, index) => (
        <h3 key={index}><Link to={`/stocks/${stock.symbol}`}>{stock.name}</Link></h3>
      ))}
      </div>
    )
  }
}

const About = () => (
  <div>
  <h2>About</h2>
  </div>
)

class Search extends Component {
  render(){
    return (
      <div>
        <h2>Search</h2>
        <form>
        <input onChange={this.handleSearchInput} type='text' placeholder='Enter a stock symbol' />
        <button type='submit'>submit</button>
        </form>
      </div>

    )
  }
}


  export default App;

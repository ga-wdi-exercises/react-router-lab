import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import Dashboard from "./Dashboard"
import About from "./About"
import stock from "./stock"
import stockData from '../data/stock-data'
import './App.css';




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stocks: [
        {"name": "Apple Inc.", "symbol": "AAPL", "lastPrice": 140.64, "change": -0.280000000000001, "high": 141.74, "low": 140.35, "open": 141.5},
        {"name": "Microsoft Corporation", "symbol": "MSFT", "lastPrice": 64.98, "change": 0.109999999999999, "high": 65.45, "low": 64.76, "open": 65.12},
        {"name": "Alphabet Inc.", "symbol": "GOOGL", "lastPrice": 835.14, "change": -4.50999999999999, "high": 844, "low": 829.1, "open": 842},
        {"name": "Facebook, Inc.", "symbol": "FB", "lastPrice": 140.34, "change": 0.810000000000002, "high": 141.0244, "low": 139.76, "open": 140.08},
        {"name": "Oracle Corporation", "symbol": "ORCL", "lastPrice": 44.65, "change": -0.300000000000004, "high": 45.09, "low": 44.575, "open": 44.91},
        {"name": "Intel Corporation", "symbol": "INTL", "lastPrice": 36.16, "change": -0.370000000000005, "high": 36.78, "low": 36.125, "open": 36.58}
      ]
    }
  }
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

        <div className="main">
          <Route exact path="/" render={() => <Dashboard stocks={this.state.stocks} />} />
          <Route path="/about" component={About} />
          <Route path="/stocks/:symbol" component={stock} />
        </div>
    </Router>
     );
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

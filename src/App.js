import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import stockData from '../data/stock-data'
import axios from 'axios'
import $ from 'jquery'
import './App.css';

class StockLink extends Component {
  render() {
    return (
      <div>
        <h2><Link to={`stock/${this.props.symbol}`}>{`${this.props.name} (${this.props.symbol})`}</Link></h2>
      </div>
    )
  }
}

class Stock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      stock: {}
    }
  }

  componentDidMount() {
    const symbol = this.props.match.params.symbol
    $.ajax({
      url: `http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=${symbol}`,
      method: "GET",
      dataType: "jsonp"
    }).then((response) => {
      this.setState({
        stock: response,
        loaded: true
      })
    })
  }

  render() {
    const stock = this.state.stock
    return (
        this.state.loaded ?
        <div>
          <h1>{`${stock.Name} (${stock.Symbol})`}</h1>
          <p>Last Price: {stock.LastPrice}</p>
          <p>&#916;: {stock.Change}</p>
          <p>&uarr;: {stock.High}</p>
          <p>&darr;: {stock.Low}</p>
          <p>open: {stock.Open}</p>
        </div> :
        <h1>Loading...</h1>
    )
  }
}



class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stocks: [],
      populated: false
    }
  }

  componentDidMount(){
    axios.get('http://localhost:3000/stocks')
      .then(resp => {
        this.setState({
          stocks: resp.data,
          populated: true
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        {
          this.state.populated ?
          this.state.stocks.map((stock, index) => (
            <StockLink {...stock} key={index} />
          )) :
          <h2>Loading...</h2>
        }
      </div>
    )
  }
}

class About extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>App for displaying stock info</p>
      </div>
    )
  }
}


class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <h1>Hello Router</h1>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
            </ul>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/stock/:symbol" component={Stock}/>
          </div>
        </Router>
    );
  }
}

export default App;

import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"

import stocks from '../../data/stock-data'

class Stock extends Component {
  constructor(props){
    super(props)
    this.state = {
      stockSymbol: this.props.match.params.symbol
    }
  }

  render() {
    let stockResults = stocks.map((stock, i) => {
      if(stock.symbol === this.state.stockSymbol){
        return (
          <div key={i}>
            <h1>{stock.name}</h1>
            <p>{stock.symbol}</p>
            <p>Last Price: {stock.lastPrice}</p>
            <p>Change: {stock.change}</p>
            <p>High: {stock.high}</p>
            <p>Low: {stock.low}</p>
            <p>Open: {stock.open}</p>
          </div>
        )
      }
    })
      return (
        <div>
          {stockResults}
        </div>
      )
    }
  }

export default Stock;

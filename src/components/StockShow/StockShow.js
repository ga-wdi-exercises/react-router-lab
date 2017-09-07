import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import './StockShow.css';
import Dashboard from '../Dashboard/Dashboard'
import $ from 'jquery'


class StockShow extends Component {
  constructor() {
    super()
    this.state = {
      selectedStock: {},
      apiStock: {}
    }
    // this.componentDidMount = this.componentDidMount.bind(this)
    this.setState = this.setState.bind(this)
  }

  componentWillMount () {
    let symbol = this.props.match.params.symbol
    let selectedStock = this.props.stocks.find((stock) => {
      return stock.symbol === symbol
    })
    this.setState({
      selectedStock: selectedStock
    })
  }

  componentDidMount () {
    const domain = "https:///www.alphavantage.co/"
    let current = this.state.selectedStock.symbol
    const endpoint = `query?function=TIME_SERIES_INTRADAY&symbol=${current}&interval=1min&apikey=`
    const apiKey = "MIRXHLRB7O0BUVAZ"

    let url = `${domain}${endpoint}${apiKey}`
  $.ajax({
    url,
    method: "GET",
    dataType: "json"
  }).then((response) => {
    console.log(response)
    console.log(Object.values(response)[0])
    let stockSymbol = Object.values(response)[0]["2. Symbol"]
    console.log(stockSymbol)
    let stocks = Object.values(response)[1]
    let mostRecent = Object.values(stocks)[0]
    let newStockObject = {
      symbol: stockSymbol,
      high: mostRecent["2. high"],
      low: mostRecent["3. low"],
      change: mostRecent["4. close"] - mostRecent["1. open"]
    }
    console.log(newStockObject)
    this.setState( { apiStock: newStockObject })
  })
}

  render() {
    console.log(this.state.selectedStock.name)
    return (
        <div>
          <p>{ this.state.apiStock.symbol }</p>
          <p>{ this.state.apiStock.change }</p>
          <p>{ this.state.apiStock.high }</p>
          <p>{ this.state.apiStock.low }</p>
        </div>
    );
  }
}

export default StockShow;

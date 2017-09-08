import React, { Component } from 'react'
import $ from 'jquery'

class Stock extends Component {
  constructor (props) {
    super(props)
    this.state = {
      stock: this.props.location.state.selectedStock,
      apiStock: {}
    }
  }
  componentDidMount () {
    const domain = `https://www.alphavantage.co/`
    let current = this.state.stock.symbol
    const apiEndpoint = `query?function=TIME_SERIES_INTRADAY&symbol=${current}&interval=1min&apikey=`
    let apiKey = '1O39HQEQXJPVJY17'
    let url = `${domain}${apiEndpoint}${apiKey}`
    //let url = domain + apiEndpoint + apiKey

    $.ajax({
      url,
      method: 'GET',
      dataType: 'json'
    }).then((response) => {
      console.log(response);
      let stockSymbol = Object.values(response)[0]["2. Symbol"]
      let prices = Object.values(response)[1]
      let latest = Object.values(prices)[0]
      // console.log(response)
      // console.log(prices)
      // console.log(latest)
      let newStockObject = {
        symbol: stockSymbol,
        current: latest["1. open"],
        high: latest["2. high"],
        low: latest["3. low"],
        change: latest["4. close"] - latest["1. open"]
      }
      this.setState({
        apiStock: newStockObject
      })
      // console.log(this.state.apiStock);
    }).catch((error) => {
      console.log(error)
    })
  }
  render () {
    return (
      <div>
        <h2>Stock {this.state.stock.name} (Stock {this.state.stock.symbol})</h2>
        <ul>
        <p>prices accurate up to one min</p>
          <li>Current Price: {this.state.apiStock.current} </li>
          <li>Change: {this.state.apiStock.change}</li>
          <li>High: {this.state.apiStock.high}</li>
          <li>Low: {this.state.apiStock.low}</li>
        </ul>
      </div>
    )
  }
}

export default Stock

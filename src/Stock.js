import React, { Component } from 'react'
import $ from "jquery"

class Stock extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedStock: this.props.location.state.selectedStock,
      apiStock: {}
    }
  }

  componentDidMount(){
    const domain = "https://www.alphavantage.co/"
    let current = this.state.selectedStock.symbol
    const endpoint = `query?function=TIME_SERIES_INTRADAY&symbol=${current}&interval=1min&apikey=`
    // You must replace this with a valid key of your own. Sign up for one at:
    // https://www.alphavantage.co/support/#api-key
    const apiKey = "demo"

    let url = `${domain}${endpoint}${apiKey}`
    $.ajax({
      url,
      method: "GET",
      dataType: "json"
    }).then((response) => {
      console.log(Object.values(response)[0]);
      let stockSymbol = Object.values(response)[0]["2. Symbol"]
      let stocks = Object.values(response)[1]
      let mostRecent = Object.values(stocks)[0]
      let cleansedStockObject = {
        symbol: stockSymbol,
        high: mostRecent["2. high"],
        low: mostRecent["3. low"],
        change: mostRecent["4. close"] - mostRecent["1. open"]
      }
      console.log(cleansedStockObject);
      this.setState({ apiStock: cleansedStockObject })
    })
  }

  render() {
    return (
      <div>
        <h2> {this.state.apiStock.symbol} </h2>
        <p>In the last minute: </p>
        <ul>
          <li>Change: {this.state.apiStock.change}</li>
          <li>High: {this.state.apiStock.high}</li>
          <li>Low: {this.state.apiStock.low}</li>
        </ul>
      </div>
    );
  }
}

export default Stock;

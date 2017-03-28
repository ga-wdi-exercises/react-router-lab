import React, { Component } from "react"

class Stock extends Component {
  render() {
    console.log(this.props.stocks);
    let thisStocks = this.props.stocks
    let displayStock = stocks.filter((thisStocks.index.symbol) => {
      return stocks.index
    })
    return(
      <div>
        <h2>{stocks[1].name} ({stocks[1].symbol}) Stock</h2>
        <ul>
          <li>Current Price: {stocks[1].lastPrice}</li>
          <li>Change: {stocks[1].change}</li>
          <li>High: {stocks[1].high}</li>
          <li>Low: {stocks[1].low}</li>
        </ul>
      </div>
    )
  }
}

export default Stock

import React, { Component } from 'react'

class Stock extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    var symbol = this.props.match.params.symbol
    var stockMaker = this.props.stocks.map((stock, i) => {
      if (symbol === stock.symbol) {
        console.log(stock.name)
        return (
          <div key={i}>
            <h1>{stock.name}</h1>
            <h2>{stock.symbol}</h2>
            <p>Change: {stock.change}</p>
            <p>Last Price: {stock.lastPrice}</p>
            <p>High: {stock.high}</p>
            <p>Low: {stock.low}</p>
          </div>
        )
      }
    })
    return(
      <div>
        {stockMaker}
      </div>
    )
  }
}

export default Stock

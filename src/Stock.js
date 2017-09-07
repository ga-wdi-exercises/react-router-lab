import React, { Component } from 'react'

class Stock extends Component {
  constructor (props) {
    super(props)
    this.state = {
      stock: this.props.location.state.selectedStock
    }
  }

  render () {
    let stock = this.state.stock
    return (
      <div>
        <h2>{stock.name}</h2>
        <ul>
          <li>Current Price: ${stock.lastPrice} </li>
          <li>Change: ${stock.change}</li>
          <li>High: ${stock.high}</li>
          <li>Low: ${stock.low}</li>
        </ul>
      </div>
    )
  }
}

export default Stock

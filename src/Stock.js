import React, {Component} from 'react'

class Stock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stock: this.props.location.state.selectedStock
    }
  }
  render() {
    let {name, symbol, lastPrice, change, high, low, open} = this.state.stock
    return (
      <div>
        <h2>{name} ({symbol})</h2>
        <ul>
          <li>Last Price: {lastPrice}</li>
          <li>Change: {change}</li>
          <li>High: {high}</li>
          <li>Low: {low}</li>
          <li>Open: {open}</li>
        </ul>
      </div>
    )
  }
}

export default Stock

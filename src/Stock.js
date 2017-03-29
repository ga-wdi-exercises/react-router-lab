import React, { Component } from 'react';
class Stock extends Component {
  constructor(props) {
    super(props)
    console.log(this.props.location.state.stock)
    this.state = {
      stock: this.props.location.state.stock
    }
  }
  render() {
    return(
      <div>
        <h2>{this.state.stock.name} ({this.state.stock.symbol})</h2>
        <ul>
          <li>Last Price: {this.state.stock.lastPrice}</li>
          <li>Change: {this.state.stock.change}</li>
          <li>High: {this.state.stock.high}</li>
          <li>Low: {this.state.stock.low}</li>
          <li>Open: {this.state.stock.open}</li>
        </ul>
      </div>
    )
  }
}

export default Stock

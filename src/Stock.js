import React, { Component } from 'react';

class Stock extends Component {
  constructor(props){
    super(props)
    this.state = {
      stock: this.props.location.state.selectedStock
    }
  }

  render () {
    return (
      <div>
      <h2>{this.state.stock.name}</h2>
      <p>Symbol: {this.state.stock.symbol}</p>
      <p>Opening Price: ${this.state.stock.open}</p>
      <p>Last Price: ${this.state.stock.lastPrice}</p>
      <p>High: ${this.state.stock.high}</p>
      <p>Low: ${this.state.stock.low}</p>
      <p>Change: {this.state.stock.change}</p>
      </div>
    )
  }
}

export default Stock

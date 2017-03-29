import React, { Component } from 'react'

class Stock extends Component {
  constructor(props){
    super(props)
    this.state = {
      stock: this.props.location.state.selectedStock
    }
  }
  render() {
    <div>
      <div>Name: {this.state.stock.name}</div>
      <div>Symbol: {this.state.stock.symbol}</div>
      <div>Price: {this.state.stock.lastprice}</div>
      <div>High: {this.state.stock.high}</div>
      <div>Low: {this.state.stock.low}</div>
    </div>
  }
}
export default Stock;

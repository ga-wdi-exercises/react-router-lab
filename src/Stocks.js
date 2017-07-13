
import React, { Component } from 'react'

class Stock extends Component {
  constructor(props){
    super(props)
    this.state = {
        stock: this.props.state.selectedStock
    }
  }
  render() {
    return (
      <div>
        <h2>{this.stte.stock.name} : {this.state.stock.symbol}</h2>
        <p>Current Price: {this.state.stock.lastPrice}</p>
        <p>Change: {this.state.stock.change}</p>
        <p>High: {this.state.stock.high}</p>
        <p>Low: {this.state.stock.low}</p>
      </div>
    );
  }
}

export default Stock;

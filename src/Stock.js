import React, { Component } from 'react'

class Stock extends Component {
  constructor(props){
    super(props)
    this.state = {
      stock: this.props.location.state.selectedStock
    }

  }
  render() {
    console.log(this.state.stock);
    return (
      <div>
        <h2>Stock {this.state.stock.name} (Stock {this.state.stock.symbol})</h2>
        <ul>
          <li>Current Price: {this.state.stock.open} </li>
          <li>Change: {this.state.stock.change}</li>
          <li>High: {this.state.stock.high}</li>
          <li>Low: {this.state.stock.low}</li>
        </ul>
      </div>
    );
  }
}

export default Stock;

import React, { Component } from 'react'
class Stock extends Component {
  constructor(props){
    super(props)
    this.state={
      stock: this.props.location.state.selectedStock
    }
  }
  render() {
    return (
      <div>
        <h2>{this.state.stock.name} - {this.state.stock.symbol}</h2>
        <p>{this.state.stock.lastPrice}</p>
        <p>{this.state.stock.low}</p>
        <p>{this.state.stock.high}</p>
      </div>
    );
  }
}


export default Stock;

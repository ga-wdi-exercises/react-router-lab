import React, { Component } from 'react';

class Stock extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedStock: this.props.location.state.selectedStock
    }
  }
  render(){
    return(
      <div>
      <h1>{this.state.selectedStock.name} - {this.state.selectedStock.symbol}</h1>
        <p>Price: {this.state.selectedStock.lastPrice} </p>
        <p>Change: {this.state.selectedStock.change} </p>
        <p>High: {this.state.selectedStock.high} </p>
        <p>Low: {this.state.selectedStock.low} </p>
        <p>At Open: {this.state.selectedStock.open} </p>
      </div>
    )
  }


}

export default Stock

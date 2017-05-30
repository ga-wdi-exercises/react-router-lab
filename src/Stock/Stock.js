import React, { Component } from 'react'
// import $ from "jquery"

class Stock extends Component {
  constructor(props){
    super(props)
    this.state = {
      stock: this.props.location.state.selectedStock
    }
  }
  render() {
    return (
      <div>
        <h1> {this.state.stock.name} ({this.state.stock.symbol}) </h1>
        <ul>
          <li>Last Price: {this.state.stock.lastPrice}</li>
          <li>Change: {this.state.stock.change}</li>
          <li>High: {this.state.stock.high}</li>
          <li>Low: {this.state.stock.low}</li>
        </ul>
      </div>
    )
  }
}

export default Stock;

import React, { Component } from 'react'

class Stock extends Component {
  constructor(props) {
    super(props)
    console.log(props);
    this.state = {
      stock: this.props.match.params.symbol
    }
  }
  render() {
    return (
      <div>
        <h2>{this.state.stock.name} {this.state.stock.symbol}</h2>
        <ul>
          <li>Close Price: {this.state.stock.lastPrice}</li>
          <li>High: {this.state.stock.high}</li>
          <li>Low: {this.state.stock.low}</li>
          <li>Open: {this.state.stock.open}</li>
        </ul>
      </div>
    )
  }
}
export default Stock


// for API calls - match params symbol to API call

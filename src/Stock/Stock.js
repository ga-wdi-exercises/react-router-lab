import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"

class Stock extends Component {
render() {
    return (
      <div>
        <h1>{this.props.stock.name}</h1>
        <p>{this.props.stock.symbol}</p>
        <p>Last Price: {this.props.stock.lastPrice}</p>
        <p>Change: {this.props.stock.change}</p>
        <p>High: {this.props.stock.high}</p>
        <p>Low: {this.props.stock.low}</p>
        <p>Open: {this.props.stock.open}</p>
      </div>
    )
  }
}

export default Stock;

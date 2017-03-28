import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Dashboard extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let stocks = this.props.stocks.map( (stock, index) => {
      let pathname = `/stocks/${stock.symbol}`
      return (
        <li key={index}>
          {stock.name} (<Link to={{
            pathname,
            state: {active: stock}
          }}>
          {stock.symbol}
          </Link>)
        </li>
      )
    })
    return (
      <div>
      <p>Hello World</p>
        <ul>
          {stocks}
        </ul>
      </div>
    )
  }
}

export default Dashboard

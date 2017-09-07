import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"

class Dashboard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var stocks = this.props.stocks.map((stock, i) => {
      return (
        <li key ={i}>
          {stock.name} <Link to={`/stocks/${stock.symbol}`}> {stock.symbol} </Link>
        </li>)
    })

    return (
      <div>
        <h1>Welcome Home</h1>
        <ul>
          {stocks}
        </ul>
      </div>
    )
  }
}

export default Dashboard

import React, { Component } from 'react'
import Stock from './Stock'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'

class Dashboard extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let stocks = this.props.stocks.map((stock, i) => {
      return <li key={i}>{stock.name} <Link to={{
          pathname: `/stocks/${stock.symbol}`,
          state: {stock: stock}}}>
          {stock.symbol}
        </Link></li>
    })
    return (
      <div>
        <h2>Dashboard page</h2>
        <ul>
          {stocks}
        </ul>
      </div>
    )
  }
}
export default Dashboard

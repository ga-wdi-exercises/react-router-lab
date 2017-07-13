import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './Dashboard.css'
import stockData from '../data/stock-data.json'


class Dashboard extends Component {

  render() {
  let stocks = stockData.map((stock, i) => {
    let pathname = `/stocks/${stock.symbol}`

    return (
      <li key={i}>
        {stock.name}
      (<Link to={{ pathname, state: {selectedStock: stock }}}> {stock.symbol}</Link>)
      </li>
    )
  })
    return (
      <div className="stocks">
        <h2>Stocks</h2>
        <ul className="stocks-list">
          <li> {stocks} </li>
        </ul>
      </div>
    )
  }
}

export default Dashboard

import React, {Component} from 'react'
const stockData = require('../data/stock-data.json')
import {
  Link
} from "react-router-dom"

class Dashboard extends Component {
  render() {
    let stocks = stockData.map((stock, i) => {
      let pathname = `/stocks/${stock.symbol}`
      return <li key={i}>
                <Link to={{pathname, state: {stock}}}>{stock.name}</Link>
             </li>
    })
    return (
      <div>
        <h2>Stocks</h2>
        <ul>
          {stocks}
        </ul>
      </div>
    );
  }
}

export default Dashboard;

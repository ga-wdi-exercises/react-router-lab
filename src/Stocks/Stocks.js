import React, { Component } from 'react'
import { Link } from "react-router-dom"
import data from '../../data/stock-data.json'
import $ from 'jquery'


class Stocks extends Component {
  render () {
    let stocks = data
    let selectedStock = stocks.map((stock, index) =>{
      let pathname = `/stocks/${stock.symbol}`
      return (
        <div>
          <li className="singleStock" key={index}>
            {stock.name} <Link to={{pathname, state: {selectedStock: stock}}}>{stock.symbol}</Link>
          </li>
        </div>
      )

    })
    return (
      <div className="singleStock">
        <h2>Current Holdings:</h2>
        {selectedStock}
      </div>
    )

  }
}

export default Stocks;

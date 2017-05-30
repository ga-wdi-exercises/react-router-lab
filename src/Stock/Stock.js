import React, { Component } from 'react';
import data from '../../data/stock-data.json';


class Stock extends Component {
  render () {
    let stocks = data

    let stockResult = stocks.map((stock, index) =>{
      return (
        <div key={index}>
          <h2>{stock.name} - {stock.symbol}</h2>
        </div>
      )

    })
    return (
      <div>
        {stockResult}
      </div>
    )

  }
}

export default Stock;

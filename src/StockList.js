import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class StockList extends Component {
  render() {
    let stocks = this.props.stocks.map( (stock, index) => {
      // console.log(stock.symbol);
      let pathTo = "/stocks/"+stock.symbol
      return <li key={index}>
        {stock.name}
        (<Link to={ {pathTo, state: {current: stock}} }>
          {stock.symbol}
        </Link>)
      </li>
    })
    return (
      <div>
        <h1> Stocks </h1>
            {stocks}
      </div>
    )
  }
}

export default StockList;

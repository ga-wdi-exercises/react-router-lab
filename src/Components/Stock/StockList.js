import React, { Component } from 'react';
import {
  Link
}from "react-router-dom";


class StockList extends Component {

  render(){
      let stockNames = this.props.stocks.map((stock, index) => {
        let pathname = `/stocks/${stock.symbol}`
        return (
          <div key={index}>
            <h3> {stock.name} -
              <Link to={
                {pathname: pathname,
                state: {selectedStock: stock}}
              }>
                {stock.symbol}
              </Link>
            </h3>
          </div>
        )
      })

    return (
        <div>
          <h1> Stocks </h1>
            {stockNames}
        </div>
    )

  }



}

export default StockList

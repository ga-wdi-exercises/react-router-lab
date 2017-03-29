import React, { Component } from 'react';
import {Link} from "react-router-dom"

class Home extends Component {
  render() {

      let stocks = this.props.stocks.map((stock, i) => {
      return (
        <li key={i}>{stock.name} {stock.symbol}
        </li>
      )
    })
    return(
      <div>
      <ul>
      {stocks}
      </ul>
      </div>
    )

  }
}

export default Home

import React, { Component } from 'react'

import stockData from './data/stock-data'

class Dashboard extends Component {

  render () {
    var output = stockData.map((data) => {
      return (
        <li> {data.name} {data.symbol}</li>

      )
    })
    return (
      <ul>{output}</ul>
    )
  }
}

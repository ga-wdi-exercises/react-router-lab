import React, {Component} from 'react'
import Stock from './Stock.js'

const data = require('../data/stock-data.json')

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      stocks: data
    }
  }

  render() {
    let stocks = this.state.stocks.map((stock, i) => {
      return (
        <Stock
          i={i}
          key={i}
          name={stock.name}
          symbol={stock.symbol}
        />
      )
    })
    return (
      <div>
        {stocks}
      </div>
    )
  }
}

export default Dashboard

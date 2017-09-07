import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Dashboard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedStock: null
    }
  }
  render () {
    let stocks = this.props.stocks.map((stock, index) => {
      let pathName = `/stocks/${stock.symbol}`
      return <li key={index}>
        {stock.name} (<Link to={{
          pathName,
          state: {selectedStock: stock}
        }}>
          {stock.symbol}
        </Link>)
      </li>
    })
    return (
      <div>
        <h2>Stocks</h2>
        <ul>
          {stocks}
        </ul>
      </div>
    )
  }
}

export default Dashboard

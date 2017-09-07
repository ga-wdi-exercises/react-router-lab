import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Dashboard extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    let stocks = this.props.stocks.map((stock, index) => {
      let path = `/stocks/${stock.symbol}`
      // console.log(stock.name)
      return <li key={index}>
        {stock.name}
        (<Link to={{
          path,
          state: {selectStock: stock}
        }}>
          {stock.symbol}
        </Link>)
      </li>
    })

    return (
      <div>
        <h1>stocks</h1>
        <p>{stocks}</p>
      </div>
    )
  }
}

export default Dashboard

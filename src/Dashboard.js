import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Dashboard extends Component {

  render () {
    var stocks = this.props.stocks.map((stock, index) => {
      var pathname = `/stocks/${stock.symbol}`

      return (
        // If a user clicks on one of the stocks listed in the dashboard view,
        // they should be directed to an individual stock show view. This view
        // should display all of a stock's attributes.

        <li key={index}>
          <h3>{stock.name}</h3>
          <Link to={{
            pathname: pathname,
            state: { stock: stock }
          }}>{stock.symbol}</Link>
        </li>
      )
    })
    return (
      <ul>{stocks}</ul>
    )
  }
}

export default Dashboard

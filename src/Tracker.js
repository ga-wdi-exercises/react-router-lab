import React, { Component } from 'react'
import './Tracker.css'
import { Link } from 'react-router-dom'

class Tracker extends Component {
  constructor (props) {
    super(props)
    console.log(props)
  }

  render () {
    let stocks = this.props.stocks.map((item, i) => {
      return <li key={i}>
        <Link to={{
          pathname: `/stocks/${item.symbol}`,
          state: { stocks: stocks }
        }}> {item.symbol} </Link>
        - {item.name} </li>
    })
    return (
      <div>
        <h1>Stock Info</h1>
        <ul>
          {stocks}
        </ul>
      </div>
    )
  }
}

export default Tracker

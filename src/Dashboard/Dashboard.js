import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import './Dashboard.css'

import stocks from '../../data/stock-data'
import Stock from '../Stock/Stock.js'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state= {
      stocks: stocks
    }
  }

  render() {
    let stocksRender = this.state.stocks.map((stock, i) => {
      let pathname = `/stocks/${stock.symbol}`
      return (
        <div key={i}>
          <p>{stock.name} | <Link to={{pathname}}>{stock.symbol}</Link></p>
        </div>
      )
    })

    return (
      <div>
        {stocksRender}
      </div>
    )
  }
}

export default Dashboard;

import React, {Component} from 'react'
import './Dashboard.css'
import { NavLink } from "react-router-dom"

class Dashboard extends Component {

  render() {
    let stocks = this.props.stocks.map((stock, i)=>{
      return(
        <div>
          <h2 key={i}>{stock.name} : <NavLink to='/stocks/:symbol'>{stock.symbol}</NavLink></h2>
          <p>Current Price: {stock.lastPrice}</p>
          <p>Change: {stock.change}</p>
          <p>High: {stock.high}</p>
          <p>Low: {stock.low}</p>
        </div>
      )
    })
    return(
      <div>
        <h1>Dashboard</h1>
          {stocks}
      </div>
    )
  }
}

export default Dashboard;

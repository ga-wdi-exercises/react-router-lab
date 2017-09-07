import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"


class Dashboard extends Component {
  render () {
    console.log(this.props.stocks)
    let stock = this.props.stocks.map( (stock, index) =>{

      return (
        <div key={index}>
          <p>{stock.name}: <Link to={stock.symbol}>{stock.symbol}</Link>
          </p>
        </div>
      )
    })
    return (
      <div>
      <h2>Dashboard</h2>
      <div>{stock}</div>
      </div>
    )
  }

}


export default Dashboard;

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import './Dashboard.css';


class Dashboard extends Component {
  constructor() {
    super()
    this.state = {}
          }
  render() {
    let stocks = this.props.stocks.map((stock, index) => {
      return (
        <div key={index}><Link to ={`/${stock.symbol}`}>{stock.name} {stock.symbol}</Link></div>
      )
    })
    return (
      <div>
        { stocks }
      </div>
    )
  }
}

export default Dashboard

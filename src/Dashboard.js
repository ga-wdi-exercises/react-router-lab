import React, { Component } from "react"
import { Link } from "react-router-dom"

import "./Dashboard.css"

class Dashboard extends Component {
  // displayStocks() {
  //   {this.props.stocks}.forEach()
  // }
  // componentWillMount(){
  //   console.log(this.props.stocks)
  // }

  render() {
    let mappedData = this.props.stocks.map( (stocks, index) => {
      let url = "/stock/" + stocks.symbol
      return (<li key={index}>{stocks.name} (<Link to={url}>{stocks.symbol}</Link>)</li>)
    })
    return(
      <div className="stocks">
        <h2>Stocks</h2>
        <ul className="stocks-list">
          {mappedData}
        </ul>
      </div>
    )
  }
}

export default Dashboard

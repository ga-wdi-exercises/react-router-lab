import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./Home.css"
// import Stocks from '../data/stock-data.json';


class Home extends Component {
  constructor(props){
    super(props)
  }
  render(){
    const stocks = this.props.stocks.map((stock, i) => {
      const stockpath = `/stocks/${stock.symbol}`
      return (
      <li key={i}>
        {stock.name}
      (<Link to={{stockpath, state: {selectedStock: stock}}})
        {stock.symbol}
      </Link>
      </li>
      )
    })
    return(
      <div className="stocks">
        <h2>Stocks</h2>
        <ul className="stocks-list">
          <li>{stocks}</li>
        </ul>
      </div>
    )
  }
}

export default Home;

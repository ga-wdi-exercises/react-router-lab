import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./Home.css"
// import Stocks from '../data/stock-data.json';


class Dashboard extends Component {
  constructor(props){
    super(props)
  }
  render(){
    const stocks = this.props.stocks.map((stock, i) => {
      return (
      <div key={i}>
        <p>{stock.name}</p>
        <p>{stock.symbol}</p>
      </div>
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

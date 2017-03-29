import React, { Component } from 'react'
import { Link } from "react-router-dom"


class Dashboard extends Component {
  constructor(props){
    super(props)
  }
  render() {
    let stocks = this.props.stocks.map((stock, i) => {
      let pathname = `/stocks/${stock.symbol}`
      return <li className="stocks-stock" key={i}>
        {stock.name} (<Link to={{
            pathname,
            state: {selectedStock: stock}
      }}>
            {stock.symbol}
            </Link>)
             </li>
    })
    return(
      <div className="stocks">
      <h1>Stocks</h1>
      <li>{stocks}</li>
      </div>
    );
  }
}

export default Dashboard;

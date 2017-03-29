import React, { Component } from 'react'
import { Link } from "react-router-dom"

class Dashboard extends Component {
  constructor(props){
    super(props)
  }
  render(){
    var stocks = this.props.stock.map(function(stock, i){
      var pathname = '/stocks/${stock.symbol}'
      return <li className="stocks-stock" key={i}>
              {stock.name} (<Link to={{
                pathname,
                state: {selectedStock: stock}
              }}>
              {stock.symbol}
              </Link>
            </li>
    })
    return (
      <div className="stocks">
      <h2>Stocks</h2>
      <ul className="stock-list">
      {stocks}
      </ul>
      </div>
    );
  }
}
export default Dashboard;

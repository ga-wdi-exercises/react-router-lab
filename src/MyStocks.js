import React, { Component } from 'react';
// import axios from 'axios';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from "react-router-dom"
// import SearchContainer from '../SearchContainer'
import './App.css';



class MyStocks extends Component {
//   constructor(props) {
//   super(props)
// }
render() {
  let stocks = this.props.stocks.map((stock, i) => {
    let pathname = `/stocks/${stock.symbol}`
    return <li className="stocks-stock" key={i}>
             {stock.name} (<link to={{
                              pathname,
                              state: {selectedStock: stock}
                            }}>
                            {stock.symbol}
                          </link>)
           </li>
  })
  return (
    <div className="stocks">
      <h2>Stocks</h2>
      <ul className="stocks-list">
        {stocks}
      </ul>
    </div>
  );
}

        }

export default MyStocks

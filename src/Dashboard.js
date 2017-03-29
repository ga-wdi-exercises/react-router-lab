import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Dashboard extends Component{
  render(){
    let stocks = this.props.stocks.map((stock, index) => {
      return <li key={index}>{stock.name} (<Link to={{
                              pathname: `/stocks/{stock.symbol}`,
                              state: {selectedStock: stock}
                            }}>{stock.symbol}</Link>)
             </li>
    })
    return(<div className="dashboard">
      <h2>Stocks</h2>
      {stocks}
    </div>)
  }
}

export default Dashboard

import React, { Component } from 'react';
import Stock from './Stock.js'

class Dashboard extends Component {
  render () {
  let allStocks = this.props.stocks.map( (stock, i)=>{
    return <Stock name={stock.name} symbol={stock.symbol} key={i}/>
  })
    return (
      <div>
        <h2>Stocks</h2>
        {allStocks}
      </div>
    )
  }
}


export default Dashboard

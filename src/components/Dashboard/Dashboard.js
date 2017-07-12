import React, { Component } from 'react';
import './Dashboard.css'


class Dashboard extends Component {
  render(){
    let stock = this.props.data.map((data, indexKey) =>{
      return(
      <div className="wrapper">
        <div className="dashboard" key={indexKey}>
          <h4>{data.name}</h4>
          <p>Symbol: {data.symbol}</p>
          {/* <p>Change: {data.change}</p>
          <p>High: {data.high}</p>
          <p>Low: {data.low}</p>
          <p>Open: {data.open}</p> */}
        </div>
      </div>
      )
    })
    return(
      <div className="stocks">
        <h2>Stocks</h2>
          {stock}
      </div>
    )
  }
}

export default Dashboard

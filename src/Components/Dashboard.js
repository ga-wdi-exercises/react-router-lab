import React, { Component } from 'react'

class Dashboard extends Component {
  render(){
    var print = this.props.stocks.map((stock, index) => {
      return(
        <div key={index}>
          <p>{stock.name} ({stock.symbol})</p>
        </div>
      )
    })
    return(
      <div>
      <h1>Dashboard</h1>
      <div>{print}</div>
      </div>
    )
  }
}

export default Dashboard

import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Dashboard extends Component {
  render () {
    console.log(this.props.stocks)
    let stock = this.props.stocks.map( (stock, index) =>{

      return (
        <div key={index}>
          <p>{stock.name}&nbsp;|&nbsp;
          <Link to={{pathname: `stocks/${stock.symbol}`, state: {selectedStock: stock} }}>
            {stock.symbol}
          </Link>
          </p>
        </div>
      )
    })
    return (
      <div>
      <h2>Dashboard</h2>
      <div>{stock}</div>
      </div>
    )
  }

}


export default Dashboard;

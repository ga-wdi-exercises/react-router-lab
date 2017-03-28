import React, {Component} from 'react'
import {Link} from "react-router-dom"


class Dashboard extends Component{

  render(){
    let stocks = this.props.stocks.map((stock, index) => {
      return(
        <li key={index}>{stock.name} {stock.symbol}</li>
      )
    })

    return(
      <div>
          <ul>
            {stocks}
          </ul>
      </div>
    )
  }
}

export default Dashboard

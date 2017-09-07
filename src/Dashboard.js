import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class Dashboard extends Component {

  render() {
    var stocks = this.props.stocks.map((stock, index) => {
      return (
        <div key= {index}>
          <Link to =
          {{pathname: '/stocks' + stock.symbol }}
          key = {index}>
          {stock.symbol}, {stock.name}
          </Link>
        </div>
      )
    })

    return (
      <div>
        {stocks}
      </div>
    )
  }
}

export default Dashboard

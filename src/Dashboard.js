import React, { Component } from 'react'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    console.log(this.props.stocks);
  }
  render() {
    let stocks = this.props.stocks.map((stock, i) => {
      return <li key={i}>{stock.name} {stock.symbol}</li>
    })
    return (
      <div>
        <h2>Dashboard page</h2>
        <ul>
          {stocks}
        </ul>
      </div>
    )
  }
}
export default Dashboard

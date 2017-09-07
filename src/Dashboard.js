import React, { Component } from 'react'

class Dashboard extends Component {
  render() {
    var stockData = this.props.stocks.forEach((stock) => {
      return (<li> stock.name </li>)
    })

    return (
      <div>
        <h1>Welcome Home</h1>
        <ul>
          {stockData}
        </ul>
      </div>
    )
  }
}

export default Dashboard

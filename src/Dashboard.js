import React, { Component } from 'react';

class Dashboard extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let stocks = this.props.stocks.map( (stock, index) => {
      return (
        <li key={index}>
          {stock.name}
        </li>
      )
    })
    return (
      <div>
      <p>Hello World</p>
        <ul>
          {stocks}
        </ul>
      </div>
    )
  }
}

export default Dashboard

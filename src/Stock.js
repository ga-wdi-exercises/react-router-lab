import React, { Component } from "react"

class Stock extends Component {
  render() {
    return(
      <div>
        <h2>Stock Name (Stock Symbol)</h2>
        <ul>
          <li>Current Price: </li>
          <li>Change: </li>
          <li>High: </li>
          <li>Low: </li>
        </ul>
      </div>
    )
  }
}

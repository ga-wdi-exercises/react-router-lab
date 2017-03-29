import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"

class Dashboard extends Component {
  render(){
    var list = this.props.stocks.map((stock, index) => {
      let pathname = `/stocks/${stock.symbol}`
      return(
        <div key={index}>
          <p>{stock.name} &nbsp;
            <Link to={{
              pathname,
              state: {selected: stock}
            }}>
            ({stock.symbol})
            </Link>
          </p>
        </div>
      )
    })
    return(
      <div>
      <h1>Dashboard</h1>
      <div>{list}</div>
      </div>
    )
  }
}

export default Dashboard

import React, { Component } from 'react'
// import axios from 'axios'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom"

class Tracker extends Component {
  constructor (props) {
    super(props)
    console.log(this.props.stocks)
  }

  render (props) {
    let stock = this.props.stocks.map(function(x, i) {
      // let path = `/stock/${x.symbol}`
      {return <li key={i}>{x.name} <Link to={{pathname: `/stock/${x.symbol}`, state: {selectedStock: x}}}>{x.symbol}</Link> </li>}
      }
    )

    return (
      <div>
        <h1>Home</h1>

        {stock}
      </div>
    )
  }
}

export default Tracker

import React, { Component } from 'react'
import axios from 'axios'
import Stock from './Stock'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount() {
      axios.get('http://localhost:3000/stocks')
      .then((res) => {
        this.setState({
          data: res.data
        })
      })
      .catch((err) => {
        console.log(err);
      })
    }
  render() {
    console.log(this.state)
    let stocks = this.state.data.map((stock, i) => {
      return (
        <li key={i}>{stock.name} <Link to={`/stocks/${stock.symbol}`}>
          {stock.symbol}
        </Link></li>
      )
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

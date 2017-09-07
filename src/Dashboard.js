import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'

class Dashboard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      newStocks: []
    }
  }
  componentDidMount () {
    let url = `http://localhost:3000/stocks`
    $.ajax({
      url,
      method: 'GET',
      dataType: 'json'
    }).then((response) => {
      // console.log(response);
      this.setState({
        newStocks: response
      })
      // console.log(this.state.newStocks)
    }).catch((error) => {
      console.log(error)
    })
  }
  render () {
    let stocks = this.state.newStocks.map((stock, index) => {
      let pathname = `/stocks/${stock.symbol}`
      // console.log(stock.name)
      return <li key={index}>
        {stock.name} (<Link to={{
          pathname,
          state: {selectedStock: stock}
        }}>
          {stock.symbol}
        </Link>)
      </li>
    })

    return (
      <div>
        <h1>stocks</h1>
        <p>{stocks}</p>
      </div>
    )
  }
}

export default Dashboard

import React, { Component } from 'react'

class Info extends Component {
  constructor (props) {
    super(props)
    console.log(props)
    this.state = {
      state: this.props.location.state.selectedStock
    }
    console.log(this.state)
  }
  render () {
    let state = this.state.state
    return (
      <div>
        <h2>Stock Info</h2>
        <p>Name: {state.name}</p>
        <p>Symbol: {state.symbol}</p>
        <p>Price: {state.lastPrice}</p>
        <p>Change: {state.change}</p>
        <p>High: {state.high}</p>
        <p>Low: {state.low}</p>
        <p>Open: {state.open}</p>
      </div>
    )
  }
}

export default Info

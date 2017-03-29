import React, { Component } from 'react'

class Stock extends Component {
  constructor(props){
    super(props)
    this.state = {
        selected: this.props.location.state.selected
    }
  }
  render(){
    return(
      <div>
        <h1>{this.state.selected.name} ({this.state.selected.symbol})</h1>
        <p>Last Price: {this.state.selected.lastPrice}</p>
        <p>Change: {this.state.selected.change}</p>
        <p>High: {this.state.selected.high}</p>
        <p>Low: {this.state.selected.low}</p>
        <p>Open: {this.state.selected.open}</p>
      </div>
    )
  }
}

export default Stock

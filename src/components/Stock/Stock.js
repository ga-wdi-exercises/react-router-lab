import React, { Component } from 'react';
import './Stock.css'

class Stock extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: this.props.location.state.stock
    }
  }
  render(){
    return(
      <div>
        <h2>{this.state.data.name}</h2>
        <p>{this.state.data.symbol}</p>
        <p>Change: {this.state.data.change}</p>
        <p>High: {this.state.data.high}</p>
        <p>Low: {this.state.data.low}</p>
        <p>Open: {this.state.data.open}</p>
      </div>
    )
  }
}

export default Stock

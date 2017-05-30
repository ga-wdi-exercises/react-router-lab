import React, {Component} from 'react'

class Stock extends Component {
  constructor(props){
    console.log(props)
  super(props)
  this.state = {
    stock: this.props.location.state.stock
    }
  }
  render(){
    console.log(this.state.stock)
    return (
      <div>
        <h1>{this.state.stock.name} ({this.state.stock.symbol})</h1>
        <ul>
          <li>Current Price: {this.state.stock.lastPrice}</li>
          <li>Change: {this.state.stock.change}</li>
          <li>High: {this.state.stock.high}</li>
          <li>Low: {this.state.stock.low}</li>
        </ul>
      </div>
    )
  }
}

export default Stock

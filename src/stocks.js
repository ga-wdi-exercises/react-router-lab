import React, {Component} from "react";
import stockData from "../data/stock-data"

class Stocks extends Component{
  constructor(props){
    super(props)
    this.state ={
      stock: this.props.location.state.selectedStock
    }
  }
	render() {
    return(
      <div>
        <h2>{this.state.stock.name}</h2>
        <div>Symbol: {this.state.stock.symbol}</div>
        <div>Last Price: {this.state.stock.lastPrice}</div>
        <div>Change: {this.state.stock.change}</div>
        <div>High: {this.state.stock.high}</div>
        <div>Low: {this.state.stock.low}</div>
        <div>Open: {this.state.stock.open}</div>
      </div>
    )

  }
}

export default Stocks;

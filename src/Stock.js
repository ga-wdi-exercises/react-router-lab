import React, { Component } from 'react'
import axios from 'axios'

class Stock extends Component {
  constructor(props){
    super(props)
    this.state = {
      stock: this.props.location.state.selectedStock,
      apiStock: {}
    }
  }

  componentDidMount(){
  axios.get ("http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=" + this.state.selectedStock.symbol)
  .then((response) => {
     this.setState({
        apiStock: response.data
     })
  })
}

  render() {
    return (
      <div>
        <h2>{this.state.apiStock.name} ({this.state.apiStock.symbol})</h2>
        <ul>
          <li>Current Price: {this.state.apiStock.lastPrice}</li>
          <li>Change: {this.state.apiStock.change}</li>
          <li>High: {this.state.apiStock.high}</li>
          <li>Low: {this.state.apiStock.low}</li>
        </ul>
      </div>
    );
  }
}

export default Stock;

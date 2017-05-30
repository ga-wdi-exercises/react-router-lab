import React, { Component } from 'react'
import $ from "jquery"

class Stock extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedStock: this.props.location.state.selectedStock,
      apiStock: {}
    }
  }
  componentStocks() {
    let url = "http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=" + this.state.selectedStock.symbol
    $.ajax({
      url,
      method: "GET",
      dataType: "jsonp"
    }).then((response) => {
      this.setState({ apiStock: response })
    })
  }
  render() {
    return (
      <div>
        <h1> {this.state.apiStock.Name} ({this.state.apiStock.Symbol}) </h1>
        <ul>
          <li>Last Price: {this.state.apiStock.LastPrice}</li>
          <li>Change: {this.state.apiStock.Change}</li>
          <li>High: {this.state.apiStock.High}</li>
          <li>Low: {this.state.apiStock.Low}</li>
        </ul>
      </div>
    )
  }
}

export default Stock;

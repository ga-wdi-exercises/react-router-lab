import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import './StockShow.css';
import Dashboard from '../Dashboard/Dashboard'


class StockShow extends Component {
  constructor() {
    super()
    this.state = {
      selectedStock: {}
    }
    // this.componentDidMount = this.componentDidMount.bind(this)
    this.setState = this.setState.bind(this)
  }

  componentWillMount () {
    let symbol = this.props.match.params.symbol
    let selectedStock = this.props.stocks.find((stock) => {
      return stock.symbol === symbol
    })
    this.setState({
      selectedStock: selectedStock
    })
  }

  render() {
    console.log(this.state.selectedStock.name)
    return (
        <div>
          <p>{ this.state.selectedStock.name }</p>
          <p>{ this.state.selectedStock.symbol }</p>
          <p>{ this.state.selectedStock.lastPrice }</p>
          <p>{ this.state.selectedStock.change }</p>
          <p>{ this.state.selectedStock.high }</p>
          <p>{ this.state.selectedStock.low }</p>
          <p>{ this.state.selectedStock.open }</p>
        </div>
    );
  }
}

export default StockShow;

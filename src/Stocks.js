import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"


class Stocks extends Component {
	render() {
		let {stocks} = this.props
		console.log(stocks)
		let stocksResult = stocks.map( (stock, index) => {
			return (
			<div key={index} >
				<h3><bold>{stock.name}</bold> - {stock.symbol}</h3>
			</div>
			)
		})
		return (
			<div>
				{stocksResult}
			</div>
		)
	}
}

export default Stocks
import React, { Component } from 'react'
import {
  Link
} from "react-router-dom"
import stockData from '../data/stock-data.json'


class Stocks extends Component {
	render() {
		let stocksResult = stockData.map( (stock, index) => {
			let pathname=`/stocks/${stock.symbol}`
			return (
			<div key={index} >
				<Link to={pathname} ><bold>{stock.name}</bold> - {stock.symbol}</Link>
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
import React, {Component} from "react";
import stockData from "../data/stock-data"

class Dashboard extends Component{
	render() {
		let stocks = stockData.map((stock, index) => {
			return (
				<div key={index}>
					<p>{stock.name}</p>
					<p>{stock.symbol}</p>
					<p>{stock.lastPrice}</p>
				</div>
			)
		})
		return (
			<div>
				<h1>All Stocks</h1>
				{stocks}
			</div>
			)
	}
}

export default Dashboard

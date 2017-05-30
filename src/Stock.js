import React, { Component } from 'react'
import stockData from '../data/stock-data.json'

class Stock extends Component {
	render() {
		let stockSymbol = this.props.match.params.symbol
		let stock = stockData.map((item, index) => {
			if (item.symbol === stockSymbol) {
				return (
					<div key={index}>
						<h2>{item.name} ({item.symbol})</h2>
						<p></p>
						<p>High: {item.high}</p>
						<p>Low: {item.low}</p>
						<p>Open: {item.open}</p>
					</div>
				)
			}
		})
		return (
			<div>
				<h3>{stock}</h3>	
			</div>
		)
	}
}

export default Stock
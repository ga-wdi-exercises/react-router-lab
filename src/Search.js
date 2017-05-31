import React, { Component } from 'react'
import stockData from '../data/stock-data.json'
import axios from 'axios'

class Search extends Component {
	constructor(props) {
		super(props);

	}

	componentDidMount() {

	}
	render() {
		console.log(this.props.stocks)
		let stock = this.props.stocks.map((item, index) => {
			return (
				<div key={index}>
					<h2>({item.symbol || item.t})</h2>
					<p></p>
					<p>High: {item.high || item.l_fix}</p>
					<p>Low: {item.low || item.l}</p>
					<p>Open: {item.open || item.l_cur}</p>
				</div>
			)
		})
		return (
			<div>
				<h3>{stock}</h3>	
			</div>
		)
	}
}

export default Search
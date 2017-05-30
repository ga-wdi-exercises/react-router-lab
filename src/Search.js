import React, { Component } from 'react'
import stockData from '../data/stock-data.json'
import axios from 'axios'

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stockDataAPI: stockData,
			stockSymbol: this.props.match.params.symbol
		}
	}
	
	componentDidMount() {
		axios.get(`http://finance.google.com/finance/info?client=ig&q=NASDAQ%3A${this.state.stockSymbol}`).then((response) => {
			let blah = JSON.parse(response.data.slice(3));
			console.log(blah)
			this.setState({
				stockDataAPI: JSON.parse(response.data.slice(3))
			})
		}).catch((err) => {
			console.log(err)
		})
	}
	render() {
		let stock = this.state.stockDataAPI.map((item, index) => {
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
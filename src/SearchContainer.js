import React, { Component } from 'react'
import stockData from '../data/stock-data.json'
import axios from 'axios'

class SearchContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stockDataAPI: stockData,
			stockSymbol: this.props.match.params.symbol
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.searchStock = this.searchStock.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	searchStock() {
		console.log("search")
	}
	handleSubmit(event) {
		this.searchStock()
		event.preventDefault()
	}
	handleChange(event) {
		console.log("change")
	}
	render() {
		return (
			<div>
				<h1>Search Symbols</h1>
	        	<input type="text" name="symbol" placeholder="Stock Symbol" onChange={this.handleChange}/>
	        	<input type="submit" value="Submit" onClick={this.handleSubmit}/>
	        </div>
		)
	}
}

export default SearchContainer
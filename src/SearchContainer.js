import React, { Component } from 'react'
import Search from './Search.js'
import stockData from '../data/stock-data.json'
import axios from 'axios'

class SearchContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stockDataAPI: stockData,
			symbol: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.searchStock = this.searchStock.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	searchStock() {
		console.log("search")
		axios.get(`http://finance.google.com/finance/info?client=ig&q=NASDAQ%3A${this.state.symbol}`).then((response) => {
			let blah = JSON.parse(response.data.slice(3));
			console.log(blah)
			this.setState({
				stockDataAPI: JSON.parse(response.data.slice(3))
			})
		}).catch((err) => {
			console.log(err)
		})
	}
	handleSubmit(event) {
		this.searchStock()
		event.preventDefault()
	}
	handleChange(event) {
		const name = event.target.name
		this.setState({
			[name]: event.target.value
		}, () => { console.log(this.state)})
	}
	render() {
		return (
			<div>
				<h1>Search Symbols</h1>
	        	<input type="text" name="symbol" placeholder="Stock Symbol" onChange={this.handleChange}/>
	        	<input type="submit" value="Submit" onClick={this.handleSubmit}/>
	        	<Search stocks={this.state.stockDataAPI}/>
	        </div>
		)
	}
}

export default SearchContainer
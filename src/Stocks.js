import React, { Component } from 'react'
import {
  Link
} from "react-router-dom"
import axios from 'axios'
import stockData from '../data/stock-data.json'


class Stocks extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stockDataAPI: stockData
		}
	}
	componentDidMount() {
		axios.get('http://localhost:3000/stocks').then((response) => {
			this.setState({
				stockDataAPI: response.data
			})
		}).catch((err) => {
			console.log(err)
		})
	}
	render() {
		let stocksResult = this.state.stockDataAPI.map( (stock, index) => {
			let pathname=`/stocks/${stock.symbol}`
			return (
			<div key={index} >
				<Link to={pathname} ><bold>{stock.name}</bold> - {stock.symbol}</Link>
			</div>
			)
		})
		return (
			<div>
				<br /  >
				{stocksResult}
			</div>
		)
	}
}

export default Stocks
import React, {Component} from "react";
import stockData from "../data/stock-data"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import Stocks from "./stocks"

class Dashboard extends Component{
	constructor(props){
		super(props)
	}
	render() {
		let stocks = stockData.map((stock, index) => {
			let pathname = `/stocks/${stock.symbol}`
			return (

					<div>
						<div key={index}>
							<p>{stock.name}</p>
							<p><Link to={{
								pathname, 
								state : {selectedStock: stock}
							}}>{stock.symbol}</Link></p>



						</div>
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

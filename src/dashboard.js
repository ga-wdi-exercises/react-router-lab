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
	render() {
		let stocks = stockData.map((stock, index) => {
			return (
				<Router>
					<div>
						<div key={index}>
							<p><Link to="/stocks">{stock.name}</Link></p>
							<p>{stock.symbol}</p>

							<Route
								path="/stocks"
								render={() => {
								return(
								<Stocks />
							)
						}}
					/>

						</div>
					</div>
				</Router>
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

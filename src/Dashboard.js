import React,{ Component} from 'react'
import { Link } from "react-router-dom"


class Dashboard extends Component{
	

	render() {
		let stockList = this.props.stocks.map((ticker, idx)=>{
			return (<li key={idx+1} >
						<Link to={{ pathname: '/stocks/'+ticker.symbol }}

  						onClick={(e)=>{this.props.clickStock(e,this.props.stocks[idx])}}
						>
					{ticker.symbol}</Link> - {ticker.name} </li>)
		})
		return (
				<div className="stocks">
  					<h2>Stocks</h2>
  					<ul className="stocks-list">
    					{stockList}
  					</ul>
				</div>
		);
	}
}

export default Dashboard
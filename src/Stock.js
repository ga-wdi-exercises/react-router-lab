import React,{ Component} from 'react'



class Stock extends Component{
	
	//this.props.targetStock
	render() {
		return (
			<div>
  				<h2>{this.props.currentStock.name} {this.props.currentStock.symbol}</h2>
  				<ul>
  				  <li>Current Price: {this.props.currentStock.lastPrice}</li>
  				  <li>Change: {this.props.currentStock.change}</li>
  				  <li>High: {this.props.currentStock.high}</li>
  				  <li>Low: {this.props.currentStock.low}</li>
  				  <li></li>
  				</ul>
			</div>
		);
	}
}

export default Stock




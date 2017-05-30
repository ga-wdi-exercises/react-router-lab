import React, { Component } from 'react'

class Stock extends Component {
	render() {
		let stock = this.props.match.params.symbol
		return (
			<div>
				<h3>{stock}</h3>	
			</div>
		)
	}
}

export default Stock
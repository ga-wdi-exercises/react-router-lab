import React, { Component } from 'react'

class Stock extends Component {
	render() {
		console.log(this.props.params)
		return (
			<h3>Individual Stock</h3>
		)
	}
}

export default Stock
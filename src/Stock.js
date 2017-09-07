import React, { Component } from 'react';

class Stock extends Component {
  constructor(props){
    super(props)
    this.state = {
      stock: this.props.location.state.selectedStock
    }
  }

  render () {
    return (
      <div>
      <h2>stock detail</h2>
      </div>
    )
  }
}

export default Stock

import React, { Component } from 'react'

class Stock extends Component {
  constructor(props){
    super(props)
    this.state={
      stock: this.props.stock
    }
  }
  render(){
    return(
      <div>
      {this.props.stock}
      </div>
    )
  }
}

export default Stock

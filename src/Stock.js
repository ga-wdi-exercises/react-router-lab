import React, { Component } from 'react'

class Stock extends Component {
  constructor(props){
    super(props)
    this.state={
      stock: this.props.location
    }
  }
  render(){
    console.log(this.props);
    console.log(this.state);
    return(
      <div>
      {this.props.stock}
      </div>
    )
  }
}

export default Stock

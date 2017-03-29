import React, { Component } from 'react';





class Stock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stock: this.props.location.state.selectedStock

  }
}

render(){
  return(
    <div>
      <h2>Hello</h2>
      <ul>
        <li>Current Price: </li>
        <li>Change: </li>
        <li>High: </li>
        <li>Low: </li>
      </ul>
    </div>
  )
}

}



export default Stock

import React, { Component } from 'react';
import myData from '../data/stock-data.json'

class Home extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return(
      <div className="stocks">
        <h2>{this.props.name}</h2>
        <ul className="stocks-list">
          <li>{this.props.symbol}</li>
          <li>{this.props.lastPrice}</li>
          <li>{this.props.change}</li>
          <li>{this.props.high}</li>
          <li>{this.props.low}</li>
          <li>{this.props.open}</li>
        </ul>
      </div>
    )
  }
}

export default Home

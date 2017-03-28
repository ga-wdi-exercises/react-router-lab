import React, { Component } from 'react';
import myData from '../data/stock-data.json'

class Home extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return(
      <div className="stocks">
        <h2>Stocks</h2>
        <ul className="stocks-list">
          <li>{this.props.name}</li>
        </ul>
      </div>
    )
  }
}

export default Home

import React, { Component } from 'react';
// import axios from 'axios'
// import * as data from './stock.json';

class Home extends Component {
  render () {
    let stockData = this.props.stocks.map((stockData, index) =>{
    return (
      <div>
        <h2>Stock</h2>
        <p>{this.props.stocks}</p>
      </div>
    )
    })
  }
}

export default Home;

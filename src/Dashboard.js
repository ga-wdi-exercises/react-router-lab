import React, { Component } from 'react'
import { link } from "react-router-dom"
import App from './App'

class Dashboard extends Component {
  constructor(props){
    super(props)
    console.log(props)
  }

  render(){
    let stocks = this.props.stocks

    return(
      <div>
        <h1>Stocks</h1>
        {stocks.forEach(stock, i){
          return({stock.name})
        }}
    </div>
    )
    }
}


export default Dashboard;

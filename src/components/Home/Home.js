import React, { Component } from 'react'
import './Home.css'
import { Link } from "react-router-dom"

class Home extends Component {
constructor() {
  super()
    this.state = {}
  }

render (){
  let stocks = this.props.stocks.map((stockData, index)=>{
    return (
       <div key={index}><Link to ={`/${stockData.symbol}`}>{stockData.name} {stockData.symbol}</Link></div>
    )
  })

  return(
    <div>
      {stocks}
    </div>
  )
}
}

export default Home;

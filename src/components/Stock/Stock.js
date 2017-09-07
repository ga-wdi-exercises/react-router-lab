import React, { Component } from 'react'
import './Stock.css'
import { Link } from "react-router-dom"

class Home extends Component {
  constructor () {
    super ()
    this.state = {
      clickSctock: {}
    }
    this.setState = this.setState.bind(this)
  }
  componentWillMount () {
     let symbol = this.props.match.params.symbol
     let clickStock = this.props.stocks.find((stockData) => {
       return stockData.symbol === symbol
     })
     this.setState({
       clickStock: clickStock
     })
   }

   render() {
     return (
         <div>
           <p>{ this.state.clickStock.name }</p>
           <p>{ this.state.clickStock.symbol }</p>
           <p>{ this.stateclickStock.lastPrice }</p>
           <p>{ this.state.clickStock.change }</p>
           <p>{ this.state.clickStock.high }</p>
           <p>{ this.state.clickStock.low }</p>
           <p>{ this.state.clickStock.open }</p>
         </div>
     );
   }

}

export default Home;

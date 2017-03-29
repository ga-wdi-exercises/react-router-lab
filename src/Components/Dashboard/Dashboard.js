import React, { Component } from 'react';
import { Link } from "react-router-dom"



class Dashboard extends Component {
  constructor(props){
    super(props)
  }
  render(){
    let stocks = this.props.stocks.map((stock, index) => {
      let pathname = `/stocks/${stock.symbol}`
      return <h4 key={index}>{stock.name} (<Link to={{
                                pathname,
                                state: {selectedStock: stock}
                              }}>
                              {stock.symbol}
                            </Link>)</h4>
    })
    return(
    <div>
      <h1>My Stocks</h1>
        {stocks}
    </div>
)
  }


}



export default Dashboard

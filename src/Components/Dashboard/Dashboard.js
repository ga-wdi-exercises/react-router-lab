import React, { Component } from 'react';


class Dashboard extends Component {
  constructor(props){
    super(props)
  }
  render(){
    let stocks = this.props.stocks.map((stock, index) => {
      return <h4 key={index}>{stock.name} ({stock.symbol})</h4>
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

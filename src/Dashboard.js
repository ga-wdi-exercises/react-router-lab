import React, { Component } from 'react'


class Dashboard extends Component {
  constructor(props){
    super(props)

  }

  render(){

    let stocks = this.props.stocks.map((stock, index) => {
      return <div>{stock.name} | {stock.symbol}</div>
    })

    return(
      <div>
        <h1>Stocks</h1>
        {stocks}
    </div>
    )
    }
}


export default Dashboard;

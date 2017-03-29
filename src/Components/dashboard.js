import React, {Component} from 'react'

class Dashboard extends Component {
  constructor(props){
  super(props)
}
render(){
  let stocks = this.props.stocks.map((stock, index)=>{
    return(
      <li key={index}>{stock.name} ({stock.symbol})</li>
    )
  })

  return(
    <div className="stocks">
      <h2>Stocks</h2>
      <ul className="stocks-list">
        {stocks}
      </ul>
    </div>
  )
}
}

export default Dashboard

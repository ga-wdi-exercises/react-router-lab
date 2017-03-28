import React, { Component } from 'react'
import './Home.css';


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stocks: this.props.stocks
    }
  }


render() {
  let stocks = this.state.stocks.map( (stock, index) => {
    return  (<li key={index}> {stock.name} <a href="#"> ({stock.symbol})</a></li>);
  })
  return (
    <div className="stocks">
      <h2>Stocks</h2>
      <ul className="stocks-list">
        {stocks}
      </ul>
    </div>

  )
}
}



export default Home

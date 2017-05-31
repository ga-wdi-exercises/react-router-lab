import React, { Component } from 'react'
import {link} from "react-router-dom"
import "/.Dashboard.css"


class Dashboard extends Component {
  constructor(props){
    super(props)
  }
  render () {
    let stocks=this.props.stocks.map((stock,i) => {
      let pathname = `/stocks/${stock.symbol}`
      return <li className="stocks-stock" key={i}>
      {stock.name} (<Link to={{
        pathname,
        state: {selectedStock: stock}
      }}>
      {stock.symbol}
      </Link>)

    </li>
})
return (
      <div className="stocks">
        <h2>Stock Data</h2>
        <ul className="stock-list">
        {stocks}
        </ul>
      </div>
    );
  }
}

export default About;

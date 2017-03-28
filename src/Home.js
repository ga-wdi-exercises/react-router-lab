import React, {Component} from "react"
import {Link} from "react-router-dom"

class Home extends Component {
  render() {
    let stocks = this.props.stocks.map((stock, i) => {
      let pathname = `/stocks/${stock.name}`
      return (<li key={i}>
                {stock.name} (<Link to={{
                  pathname,
                  state: {selectedStock: stock}
                }}>
                {stock.symbol}
                </Link>)
             </li>)
    })
    return (
      <div>
        <h2>stocks</h2>
        <ul >
          {stocks}
        </ul>
      </div>
    )
  }
}

export default Home

import React, {Component} from 'react'
import Stock from './Stock'

class Home extends Component {

  render() {
    let stocks = this.props.stocks.map( (stock, index) => (
      <Stock stock={stock} key={index} />
    ))
    return(
      <div>
        <h2>Stocks</h2>
        {stocks}
      </div>
    )
  }
}


export default Home

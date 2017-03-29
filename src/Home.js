import React, {Component} from 'react'
import Stock from './Stock.js'

class Home extends Component {
  constructor(props){
    super()
    this.state = {

    }
  }
  render() {
    console.log(this.props.stocks);
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

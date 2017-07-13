import React, {Component} from 'react'

class Stock extends Component{
  constructor(props){
    super(props)
    this.state = {
      stock:this.props.location.state.stockselected
    }

  }
  render(){
    return(
      <div>
        {/* <p>Name:{this.props.stocks[this.props.stockIndex]["name"]}</p>
        <p>Symbol: {this.props.stocks[1]["symbol"]}</p>
        <p>Last Price: {this.props.stocks[0]["lastPrice"]}</p>
        <p>Change:{this.props.stocks[0]["change"]}</p>
        <p>High{this.props.stocks[0]["high"]}</p>
        <p>Low{this.props.stocks[0]["low"]}</p>
        <p>Open:{this.props.stocks[0]["open"]}</p> */}
        <p>Name:{this.state.stock["name"]}</p>
        <p>Symbol: {this.state.stock["symbol"]}</p>
        <p>Last Price: {this.state.stock["lastPrice"]}</p>
        <p>Change:{this.state.stock["change"]}</p>
        <p>High{this.state.stock["high"]}</p>
        <p>Low{this.state.stock["low"]}</p>
        <p>Open:{this.state.stock["open"]}</p>
      </div>
    )
  }

}

export default  Stock

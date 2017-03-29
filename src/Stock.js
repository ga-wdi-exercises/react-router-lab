import React, { Component } from 'react'
import { Link } from "react-router-dom"

class Stock extends Component {
  render(){
    return(
      <div>
        <h3>{this.props.stock.name} - <Link to={{
                                        pathname: `stocks/${this.props.stock.symbol}`,
                                        state: {stockPick: this.props.stock}
                                        }}
                                      >{this.props.stock.symbol}</Link></h3>
      </div>
    )
  }
}

export default Stock

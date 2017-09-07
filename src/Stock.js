import React, {Component} from 'react'

class Stock extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
        <h3> {this.props.clickStock.symbol}, {this.props.clickStock.name} </h3>
          <ul>
            <li> Price - {this.props.clickStock.lastPrice} </li>
            <li> Change - {this.props.clickStock.change} </li>
            <li> High - {this.props.clickStock.high} </li>
            <li> Low - {this.props.clickStock.low} </li>
          </ul>
      </div>
    )
  }
}

export default Stock

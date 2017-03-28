import React, {Component} from 'react'

class Stock extends Component {
  render() {
    return (
      <div>
        {this.props.name}
        {this.props.symbol}
      </div>
    )
  }
}

export default Stock

import React, {Component} from "react"

class Particular extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stock: this.props.location.state.selectedStock
    }
  }
  render() {
    return (
      <div>
        <h2>{this.state.stock.name}</h2>
        <h2>{this.state.stock.symbol}</h2>
        <h2>{this.state.stock.change}</h2>
        <h2>{this.state.stock.high}</h2>
        <h2>{this.state.stock.low}</h2>
      </div>
    )
  }
}

export default Particular

import React, {Component} from 'react'


class StockShow extends Component {
  constructor(props){
    super(props)
    this.state = {
      stockPick: this.props.location.state.stockPick
    }
  }
  render(){

    return(
      <div>
        <h3>{this.state.stockPick.name}</h3>
      </div>
    )
  }
}

export default StockShow

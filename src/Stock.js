import React, { Component } from 'react'


class Stock extends Component {
  constructor(props){
    super(props)
this.state = {
  stock: this.props.location.state.stockx
}


  }



  render(){



    return(
      <div>
<h1> {this.state.stock.name}  --> {this.state.stock.symbol} </h1>
<ul>
<li>this.state.stock.lastPrice </li>
<li>this.state.stock.change </li>
<li>this.state.stock.high </li>
<li>this.state.stock.low</li>

</ul>
      </div>

    )

  }
}


export default Stock

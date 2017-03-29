import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  // Redirect
} from "react-router-dom"

class StockShow extends Component {
  constructor(props){
    super(props)
    this.state = {
      stock: this.props.stockPick
    }
  }
  render(){
    // console.log(this.props.params.symbol);
    return(

      <div>
        <h3>Stock Show</h3>
      </div>
    )
  }
}

export default StockShow

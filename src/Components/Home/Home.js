import React, {Component} from 'react'
import {Link} from "react-router-dom"
import './Home.css'

class Home extends Component{

  render(){
    let data = this.props.data.map((stock, index) => {
      return(
        <li key={index}>{stock.name} {stock.symbol}</li>
      )
    })

    return(
      <div>
          <ul>
            {data}
          </ul>
      </div>
    )
  }
}

export default Home

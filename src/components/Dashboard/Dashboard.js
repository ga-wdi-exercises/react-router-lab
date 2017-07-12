import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './Dashboard.css'


class Dashboard extends Component {
  render(){
    let stock = this.props.data.map((data, indexKey) =>{
      let showroute = `/stocks/${data.symbol}`
      return(

        <div className="dashboard" key={indexKey}>
          <h4><Link to={{
            pathname: showroute,
            state: {stock: data}}}>{data.name}</Link></h4>
          <p>Symbol: {data.symbol}</p>

        </div>

      )
    })
    return(
      <div className="stocks">
        <h2>Stocks</h2>
          {stock}
      </div>
    )
  }
}

export default Dashboard

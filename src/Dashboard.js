import React, { Component } from 'react'
import data from '../data/stock-data.json'
class Dashboard extends Component {
  constructor(props){
    super()
    this.state={
      body: props.body
    }
  }
  render(){
    return(
      <div>
      {data.map(function(a) {
       return (
        <p key={a.symbol}> {a.symbol} | {a.name}</p>
       );
      })}
      </div>
    )
  }
}

export default Dashboard

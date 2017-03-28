import React, { Component } from 'react'
import data from '../data/stock-data.json'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
class Dashboard extends Component {
  constructor(props){
    super()
    this.state={
      body: props.body
    }
  }
  render(){
    let stocks = data.map(function(a) {
      let url = '/stocks/'+a.symbol
      return (
        <Link to={url} key={a.symbol}><p> {a.symbol} | {a.name}</p></Link>
      );
    })
    return(
      <div>
      {stocks}
      </div>
    )
  }
}

export default Dashboard

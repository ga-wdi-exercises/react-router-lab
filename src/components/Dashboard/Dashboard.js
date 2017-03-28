import React, { Component } from 'react'
import axios from 'axios'

class Dashboard extends Component {

  render(){
    return(
      <div className="stocks">
        <h2>Stocks</h2>
        <ul className="stocks-list">
          <li>This is a stock.</li>
        </ul>
      </div>
    )
  }
}

export default Dashboard

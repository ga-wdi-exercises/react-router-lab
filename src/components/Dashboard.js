import React, {Component} from 'react'
import {
  Link
} from "react-router-dom"

class Dashboard extends Component {
  render(){
    var list = this.props.data.map((data, index) => {
      var pathname = `/stocks/${data.symbol}`
      return(
        <div key={index}>
          <p>{data.name}
            (<Link to={{
                pathname,
                state: {selectedStock: data}
              }}>
            {data.symbol}
          </Link>)
          </p>
        </div>
      )
    })
    return(
      <div>
        <div className="stocks">
          <h2>Stocks</h2>
            <ul className="stocks-list">
              <li>{list}</li>
            </ul>
          </div>
      </div>
    )
  }
}


export default Dashboard;

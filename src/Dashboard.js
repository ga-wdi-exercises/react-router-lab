import React, { Component } from "react"
import "./Dashboard.css"

class Dashboard extends Component {
  // displayStocks() {
  //   {this.props.stocks}.forEach()
  // }
  componentWillMount(){
    console.log(this.props.stocks)
  }

  render() {
    let mappedData = this.props.stocks.map( (stocks, index) => {
       // each comment needs a key attribute to keep track of data passed as props
       // key should be a unique identifier for each child component
    return (<li key={index}>{stocks.name} (<a href="#">{stocks.symbol}</a>)</li>
    )})
    return(
      <div className="stocks">
        <h2>Stocks</h2>
        <ul className="stocks-list">
          {mappedData}
        </ul>
      </div>
    )
  }
}

export default Dashboard

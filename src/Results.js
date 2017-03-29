import React, { Component } from "react"

class Results extends Component{


  render(){
    let {stocks} = this.props
    let results = stocks.map( (stock, index) => {
      return (
        <div key={index}>
          <p>{stock.name}</p>
        </div>
      )
    })

    return (
      <div>
        {results}
      </div>
    )
  }
}

export default Results

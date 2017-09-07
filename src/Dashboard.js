import React, { Component } from 'react'
import { Link } from "react-router-dom"



class Dashboard extends Component{

  // constructor(){
  //   super()
  //
  //   this.state = {
  //     stocks: this.props.stocks
  //   }
  //
  // }



  render() {
  const stocks = this.props.stocks.map((stock) => {
    let pathx = `/stocks/${stock.symbol}`
    return (
      <div key={stock.symbol}>
     <Link to = {{
         pathx,
         state: {stockx: stock}
              }} >
        { stock.name } </Link>
      </div>
    )
  })




    return (
      <div>
        { stocks }
      </div>
    )



  }

}// end of Dashboard Class

export default Dashboard

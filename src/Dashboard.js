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
  const stocks = this.props.stocks.map( (stock, index) => {
    let pathname = `/stocks/${stock.symbol}`
    // console.log(pathx)
    return (
      <div key={index}>
     <Link to={{
         pathname,
         state: {stockx: stock}
              }}>
      <li>  { stock.name }</li>
     </Link>
      </div>
    )
  })




    return (
      <div>
        <ul>

 { stocks }

        </ul>
      </div>
    )



  }

}// end of Dashboard Class

export default Dashboard

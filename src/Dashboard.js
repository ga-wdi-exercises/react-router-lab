import React, { Component } from 'react'



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
    return (
      <div>
        { stock.name }
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

import React, { Component } from 'react'

class Dashboard extends Component {

  render () {
    // let stock = this.props.stocks.map( (name, index) =>{
    //   return (
    //     <div key={index}>
    //       <p>{stocks.name}</p>
    //     </div>
    //   )
    // })
    return (
      <div>
      <h2>Dashboard</h2>
      <p>{this.props.stocks[0].name}</p>
      <p>{this.props.stocks[1].name}</p>
      
      </div>
    )
  }

}


export default Dashboard;

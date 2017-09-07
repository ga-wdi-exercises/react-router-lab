import React, { Component } from 'react'

class Dashboard extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    var stocks = this.props.stocks.map((stock, i) => {
      return (
        <li key ={i}>
          {stock.name}
        </li>)
    })

    return (
      <div>
        <h1>Welcome Home</h1>
        <ul>
          {stocks}
        </ul>
      </div>
    )
  }
}

// class Dashboard extends Component {
//   constructor(props){
//     super(props)
//   }
//   render() {
//     let stocks = this.props.stocks.map((stock, i) => {
//       let pathname = `/stocks/${stock.symbol}`
//       return <li className="stocks-stock" key={i}>
//          {stock.name} (<Link to={{
//               pathname,
//               state: {selectedStock: stock}
//             }}>
//             {stock.symbol}
//           </Link>)
//        </li>
//     })
//     return (
//       <div className="stocks">
//         <h2>Stocks</h2>
//         <ul className="stocks-list">
//           {stocks}
//         </ul>
//       </div>
//     );
//   }
// }

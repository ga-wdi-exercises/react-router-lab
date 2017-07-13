import React, {Component} from 'react'
import {
  Link
} from "react-router-dom"

class StockList extends Component{
  // changeStockIndex(e){
  //   this.setState({
  //         stock: 1
  //   })
  // }


  render(){
    let eachStocks = this.props.stocks.map((stock,i)=>{
        this.props.stockIndex
        // this.state.changeStockIndex(i)
        let pathname= `/stocks/${stock["symbol"]}`
        return( <p><Link to={{pathname,
                              state:{stockselected:stock}
                            }}>
                        {i+1}. {stock["name"]} ({stock["symbol"]})
                   </Link></p>
        )
        })
    return(
      <div>
        <p>Here is the stock names, please click on your interest to see detail information.</p>
        <p>{eachStocks}</p>
        <button onClick={(e)=>{this.props.showpage(e)}}>Go to show page </button>
      </div>
    )
  }
}

export default StockList

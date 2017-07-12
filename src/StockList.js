import React, {Component} from 'react'
import {
  Link
} from "react-router-dom"

class StockList extends Component{
  constructor (){
    super()
    this.state ={
      stock :1
    }
  }
  changeStockIndex(e){
    this.setState({
          stock: 1
    })
  }
  // axios.get('http://letsrevolutionizetesting.com/challenge.json')
  //   .then((response) => {
  //     console.log(response)
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })

  render(){
    let eachStocks = this.props.stocks.map((stock,i)=>{
        this.props.stockIndex
        // this.state.changeStockIndex(i)
        return( <p><Link to={`/stocks/${stock["symbol"]}`}> {i+1}. {stock["name"]} ({stock["symbol"]})</Link></p>
        )
        })
    return(
      <div>
        <p>Here is the stock names, please click on your interest to see detail information.{this.props.stockIndex}{this.state.stock}</p>
        <p>{eachStocks}</p>
        <button onClick={(e)=>{this.props.showpage(e)}}>Go to show page </button>
      </div>
    )
  }
}

export default StockList

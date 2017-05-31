import React, {Component} from 'react'

class Search extends Component {


  render(){
    let newStock =[]
    if (this.props.hasSearched){
    newStock = this.props.searchedStock.find(function(stock){
      return stock
    })

    console.log(newStock)
    }

    return (
      <div>
        <form onSubmit={(e) => this.props.onSearchSubmit(e)}>
          <p>Please submit a stock symbol</p>
          <p>
            <label>Symbol: </label>
            <input type="text" onChange={(e) => this.props.onSearchInput(e)}/>
          </p>
          <input type="submit" value="Search"/>
        </form>
        <p>{newStock.l_cur}</p>
        <p>{newStock.c}</p>
        <p>{newStock.pcls_fix}</p>
      </div>
    )
  }
}

export default Search

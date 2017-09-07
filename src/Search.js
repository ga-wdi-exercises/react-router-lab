import React, { Component } from 'react'
import $ from "jquery"

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: '',
      searchedResults: {}
    }
  }

  setSearch(e) {
    console.log('setSearch')
    this.setState({
      searchTerm: e.target.value
    })
  }

  doSearch(e) {
    console.log('doSearch')
    e.preventDefault()
    let url = "http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=" + this.state.searchTerm
    $.ajax({
      url,
      method: "GET",
      dataType: "jsonp"
    }).then((res) => {
      console.log(res)
      this.setState({ searchedResults: res })
      console.log(this.state.searchedResults)
    })
  }

  trackStock(e) {
    console.log('handle')
    let url = "http://localhost:3000/stocks"
    $.ajax({
      url,
      method: "POST",
      data: {
        stock: {
          name: this.state.searchedResults.Name,
          symbol: this.state.searchedResults.Symbol
        }
      },
      dataType: "json"
    }).then((response) => {
      this.props.handleTrackedState(response)
    })
  }

  render () {
    // let stock = this.state.searchedResults
    let searchDetails = (this.state.searchedResults.Name) ?
    searchDetails = (
      <div>
        <h2>{this.state.searchedResults.Name}</h2>
        <ul>
        <li>Current Price: ${this.state.searchedResults.LastPrice} </li>
        <li>Change: ${this.state.searchedResults.Change}</li>
        <li>High: ${this.state.searchedResults.High}</li>
        <li>Low: ${this.state.searchedResults.Low}</li>
      </ul>
      <button onClick={(e) => this.trackStock(e)} type="sumbit">Track</button>
      </div>
    ) : null


    return (
      <div>
        <input onChange={(e) => this.setSearch(e)} type="text" placeholder="Symbol"></input><button onClick={(e) => this.doSearch(e)} type="sumbit">Search</button>
        {searchDetails}
      </div>
    )
  }
}

export default Search

import React, { Component } from 'react'
import $ from 'jquery'

class Search extends Component {

  constructor (props) {
    super(props)
    this.state = {
      input: '',
      stock: {}
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmitSearch = this.handleSubmitSearch.bind(this)
    this.handleTrackStock = this.handleTrackStock.bind(this)
  }

  // If a user submits a stock symbol (e.g., AAPL) through the form,
  // a call will be made to the external API you've chosen,
  // Markit On Demand or Alpha Vantage.

  handleSubmitSearch (e) {
    e.preventDefault()
    let url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' + this.state.input
    $.ajax({
      url,
      method: 'GET',
      dataType: 'jsonp'
    }).then((response) => {
      this.setState({
        stock: response,
        input: ''
      })
    })
  }

  handleInputChange (e) {
    this.setState({
      input: e.target.value
    })
  }

  // A POST request is made to the local Rails API. If successful,
  // it will add the newly-tracked stock to the database.
  handleTrackStock (e) {
    let url = 'http://localhost:3000/stocks'
    $.ajax({
      url,
      method: 'POST',
      data: {
        stock: {
          name: this.state.stock.Name,
          symbol: this.state.stock.Symbol
        }
      },
      dataType: 'json'
    }).then((response) => {
      this.props.handleTrackedState(response)
    })
  }

  render () {
    // If the API call is successful, the app should display the name
    // and symbol of that stock below the search form. To the right of
    // this information, there should be a "Track Stock" button.

    var result
    if (this.state.stock.Name) {
      var name = this.state.stock.Name
      var symbol = this.state.stock.Symbol
      result = (
        <div>
          <div> {name} ({symbol})</div>
          <button onClick={(e) => this.handleTrackStock(e)}>Track Stock</button>
        </div>
      )
    } else {
      result = null
    }

    return (
      <div>
        <h1>{this.state.stock.Name}</h1>
        <form onSubmit={this.handleSubmitSearch}>
          <input type='text' placeholder='search' value={this.state.input} onChange={this.handleInputChange} />
          <button type='submit'>Search</button>
        </form>
        <div>
          {result}
        </div>
      </div>
    )
  }
}

export default Search

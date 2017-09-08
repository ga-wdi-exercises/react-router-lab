import React, { Component } from 'react'
import $ from 'jquery'

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchStock: '',
      hasSearched: false,
      returnStock: ''
    }
  }
  handleSearchInput (e) {
    this.setState({
      searchStock: e.target.value
    })
    console.log(this.state.searchStock)
  }
  setSerchStock (response) {
    this.setState({
      returnStock: response

    })
    console.log(this.state.returnStock.Name);
  }
  handleSearchSubmit (e) {
    e.preventDefault()
    this.setState({
      hasSearched: true
    })
    // console.log(this.state.searchStock)
    let url = `http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=` + this.state.searchStock
    $.ajax({
      url,
      type: 'GET',
      dataType: 'jsonp',
    }).then((response) => {

      this.setSerchStock(response)
    }).catch((err) => {
      console.log(err)
    })
  }

  render () {
    return (
      <div>
        <p>Search</p>
        <form onSubmit={(e) => this.handleSearchSubmit(e)}>
          <input type='text' onChange={(e) => this.handleSearchInput(e)} />
          <button type='submit'>Search</button>
        </form>
        <div>
          {this.state.returnStock.Name}
        </div>
      </div>
    )
  }
}

export default Search

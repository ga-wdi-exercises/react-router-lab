import React, {Component} from 'react'
import $ from 'jquery'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      queryStock: {
        name: '',
        symbol: ''
      }
    }
  }

  searchForm(e) {
    this.setState({query: e.target.value})
  }

  searchSubmit(e) {
    e.preventDefault()
    let url =  "http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=" + this.state.searchTerm
    $.ajax({
      url,
      method: 'GET',
      dataType: 'jsonp'
    }).then((response) => {this.setState({queryStock:{name: response.name, symbol: response.symbol}})})
  }

  render() {
    return (
      <div>
        <h3>Search</h3>
        <form onSubmit={ (e) => this.searchSubmit(e) }>
          <input onChange={ (e) => this.searchForm(e) } type="text" />
          <input type="submit" value="Search stocks" />
        </form>
        <div>
          {this.state.queryStock.name ?
          <div>
          {this.queryStock.symbol}, {this.queryStock.name}
          </div>
        : <div></div>}
        </div>
      </div>
    )
  }




}

export default Search

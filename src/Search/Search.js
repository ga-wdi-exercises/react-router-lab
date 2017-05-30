import React, { Component } from 'react'
import $ from "jquery"

class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      search: "",
      searchStock: {}
    }
  }
  handleChange(e){
    this.setState({
      search: e.target.value
    })
  }
  handleSearch(e){
    e.preventDefault()
      let url = "http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=" + this.state.search
      $.ajax({
        url,
        method: "GET",
        dataType: "jsonp"
      }).then((response) => {
        this.setState({ searchStock: response })
      })
    }
    handleTrackStock(e){
      let url = "http://localhost:3000/stocks"
      $.ajax({
        url,
        method: "POST",
        data: {
          stock: {
            name: this.state.searchStock.Name,
            symbol: this.state.searchStock.Symbol
          }
        },
        dataType: "json"
      }).then((response) => {
        this.props.handleTrackedState(response)
      })
    }
    render() {
    let searchResult = this.state.searchStock.Name
                          ? (<div>
                              {this.state.searchStock.Name} ({this.state.searchStock.Symbol})
                              <button onClick={ (e) => this.handleTrackStock(e) }>Track Stock</button>
                            </div>)
                          : null
    return (
      <div>
        {this.state.searchStock.name}
        <h2>Search</h2>
        <form onSubmit={ (e) => this.handleSearch(e) }>
          <input onChange={ (e) => this.handleChange(e) } type="text" />
          <input type="submit" value="Search" />
        </form>
        <div>
          { searchResult }
        </div>
      </div>
    );
  }
}

export default Search;

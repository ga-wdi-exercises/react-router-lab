import React, { Component } from 'react'
import Search from './Search'
import Results from './Results'
import Data from '../data/stock-data.json'

class SearchContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      query: '',
      hasSearched: false,
      stocks: Data,
    }
  }

  onSearchInput (event) {
    this.setState({
      query: event.target.value,
    })
  }

  onSubmitQuery(event){
    event.preventDefault();
    console.log(this.state.query)
    this.setState({
        query: '',
        hasSearched: true,
        stocks: Data,
    })
  }


  render(){
    if (this.state.hasSearched){
      return (
        <Results stocks={stocks} />
      )
    } else {
      return (
        <Search
          handleSearchInput={ (event) => this.onSearchInput(event) }
          handleSubmitQuery={ (event) => this.onSubmitQuery(event) }
          query={this.state.query}
        />
      )
    }
  }
}

export default SearchContainer

import React, { Component } from 'react'

class Search extends Component {
  constructor(props){
    super(props)
    this.state={
      search:"",
      searchedStock:{}
    }
  }

  handleChange(e) {
    this.setState({
      search: e.target.value
    })
  }

  handleSearch(e){
    e.PreventDefault()
    let url
  }

  render (){
    let searchResult=this.state.searchedStock.Name
    return (
      <div className='search-form'>
        {this.state.searchedStock.name}
        <h2>Search</h2>
        <form onSubmit={ (e) => this.handleSearch(e)}>
          <input onChange-{ (e)=> this.handleChange(e)} type='text'/>
          <input className="search-button" type="submit" value="Search" />
        </form>
        <div>
          {searchResult}
        </div>
      </div>
    )
  }
}
export default Search;

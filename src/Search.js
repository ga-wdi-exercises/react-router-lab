import React, { Component } from 'react'

class Search extends Component {
  constructor(props){
    this.state = {
      query: ''
    }
  }
  handleSearchInput (event) {
    this.setState({
      query: event.target.value
    })
  }

  submitQuery(event){
    event.preventDefault();
    console.log("this.state.query");
  }

  render(){
    return (
      <div className='searchBox'>
        <form onSubmit={(event) => this.submitQuery(event)}>
          <input
            onChange={(event) => this.handleSearchInput(event)}
            value={this.state.query}
            type="text"
            placeholder="Enter Stock Code..." />
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

export default Search

import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: "",
      searchedStock: {}
    }
  }

  submitSearch(e){
    e.preventDefault()
    console.log(this.state.query);
  }

  render() {
    return(
      <div>
        <h2>This is my Search Component</h2>
        <form>
          <input type="text" onChange={ (e) => this.setState({query: e.target.value })}></input>
          <input type="submit" value="Search" onClick={ (e) => this.submitSearch(e)}></input>
        </form>
      </div>
    )
  }
}

export default Search

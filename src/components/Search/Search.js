import React, { component } from 'react'
import './Search.csss'

class Search extends Component {
  constructor(props){
    super(props)
    this.state={
      query: '',
      hasSearched: false
    }
  }

  onSearchInput(e){
    this.setState({
      query: e.target.value
    })
  }

  onSubmitQuery(e){
    e.preventDefault()
    this.setState({
      query: '',
      hasSearched: false
    })
  }

  render(){
    return(
      <div className="search">
        <h2>Search</h2>
        <form>
          <input type="text" />
          <input type="submit" className="search-btn" value="Search" />
        </form>
      <div className="search-results">
        Search result(s) goes here.
      </div>
    </div>
    )
  }


}

export default Search

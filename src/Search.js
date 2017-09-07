import React, { Component } from 'react'
import axios from 'axios'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      searchName: '',
      searchResults: {}
    }
  }
  setSearch (e) {
    this.setState({
      searchTerm: e.target.value
    })
  }
  doSearch(e){
    e.preventDefault()
    let path = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${this.state.searchTerm}&apikey=L6OEWJ06UFX3WK93`
    axios.get(path)
    .then((res) => {
      let result = Object.values(res.data)[1]
      let resultValues = Object.values(result)[1]
      console.log(resultValues)
      // console.log(resultValues["1. open"])
      // console.log(resultValues["2. high"])
      // console.log(resultValues["3. low"])
      // console.log(resultValues["4. close"])
      this.setState({
        searchResults: {resultValues}
      })

    })
    .catch((err) => {
      console.log(err);
    })

  }
  render() {
    return (
      <div>
        <h2>Search page</h2>
        <form onSubmit={(e) => this.doSearch(e)}>
          <input onChange={(e) => this.setSearch(e)} type="text" placeholder="Stock Symbol"></input>
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}
export default Search

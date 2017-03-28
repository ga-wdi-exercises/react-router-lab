import React, { Component } from 'react';
import $ from "jquery"

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
    let url = "http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=" + this.state.query
    $.ajax({
      url,
      method: "GET",
      dataType: "jsonp"
    }).then((response) => {
      this.setState({ searchedStock: response })
    })
    console.log(this.state.searchedStock);
  }

  handleTrackk(e){
    let url = "http://localhost:3000/stocks"
    $.ajax({
      url,
      method: "POST",
      data: {
        stock: {
          name: this.state.searchedStock.Name,
          symbol: this.state.searchedStock.Symbol
        }
      },
      dataType: "json"
    }).then((response) => {
      this.props.handleTrackedState(response)
    })
  }

  render() {
    let result = this.state.searchedStock.Name
      ? (<div>
        {this.state.searchedStock.Name} ({this.state.searchedStock.Symbol})
        <button onClick={ (e) => this.handleTrack(e) }>Track Stock</button>
        <button onClick={ () => this.setState( {searchedStock: ""}) }>Clear Search</button>
        </div>)
      : <div>
        {this.state.searchedStock.Name}
          <h2>This is my Search Component</h2>
          <form>
            <input type="text" onChange={ (e) => this.setState({query: e.target.value })}></input>
            <input type="submit" value="Search" onClick={ (e) => this.submitSearch(e)}></input>
          </form>
        </div>

    return(
      <div>
        { result }
      </div>
    )
  }
}

export default Search

import React, { Component } from 'react'
import axios from 'axios'


class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchWord: "",
      searchedStock: {}
    }
  }

  handleChange(e){
    this.setState({
      searchWord: e.target.value
    })
  }

  handleSearch(e){
     e.preventDefault()
     axios.get ("http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=" + this.state.searchTerm)
     .then((response) => {
       this.setState({
           searchedStock: response.data
       })
     })
   }

   handleTrackStock(e){
   axios.get ("http://localhost:3000/stocks")
   .then((response) => {
     this.props.handleTrackedState(response)
   })
 }


render() {
   let searchResult = this.state.searchedStock.Name
                         ? (<div>
                             {this.state.searchedStock.Name} ({this.state.searchedStock.Symbol})
                             <button onClick={ (e) => this.handleTrackStock(e) } className="search-btn">Track Stock</button>
                           </div>)
                         : null
   return (
     <div>
       {this.state.searchedStock.name}
       <h2>Search</h2>
       <form onSubmit={ (e) => this.handleSearch(e) }>
         <input onChange={ (e) => this.handleChange(e) } type="text" />
         <input className="search-btn" type="submit" value="Search" />
       </form>
       <div>
         { searchResult }
       </div>
     </div>
   );
 }
}

export default Search;

import React, {Component} from 'react'

class Search extends Component {
  constructor (props) {
    super()
    this.state = {
      newStock: []
    }
  }
  componentWillMount(){
    this.setState({
      newStock: this.state.searchedStock,
      hasSearched: this.state.hasSearched
    })

  }

  render(){
    if (this.props.hasSearched){
    let newStock = this.props.searchedStock
    console.log(newStock[0])
    }

    return (
      <div>
        <form onSubmit={(e) => this.props.onSearchSubmit(e)}>
          <p>Please submit a stock symbol</p>
          <p>
            <label>Symbol: </label>
            <input type="text" onChange={(e) => this.props.onSearchInput(e)}/>
          </p>
          <input type="submit" value="Search"/>
        </form>
        {this.state.newStock}
      </div>
    )
  }
}

export default Search

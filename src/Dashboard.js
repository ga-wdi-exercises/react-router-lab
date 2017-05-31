import React, {Component} from 'react'
import axios from 'axios'
import {
  Link
} from "react-router-dom"

class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      stocks: [],
    }
  }
  componentDidMount(){
    axios.get("http://localhost:3000/stocks").then((response) => {
      this.setState({
        stocks: response.data,
      })
    })
  }
  render() {
    console.log(this.state.stocks)
    let stocks = this.state.stocks.map((stock, i) => {
      let pathname = `/stocks/${stock.symbol}`
      return <li key={i}>
                <Link to={{pathname, state: {stock}}}>{stock.name}</Link>
             </li>
    })
    return (
      <div>
        <h2>List of Stocks</h2>
        <ul>
          {stocks}
        </ul>
      </div>
    );
  }
}

export default Dashboard;

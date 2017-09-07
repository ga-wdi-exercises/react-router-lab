import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import './App.css';
import axios from 'axios'

import Dashboard from './Dashboard'
import stocks from '../data/stock-data'
import Stock from './Stock'
import About from './About'
import Search from './Search'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      stocks: [],
      clickStock: null
    }
    this.stockLink = this.stockLink.bind(this)
  }

  stockLink(e, stock) {
    this.setState({clickStock: stock})
  }

  getStocks() {
    axios.get('http://localhost:3000/stocks').then((response) => {
      this.setState({
        stocks: response.data
      })
    })
  }
  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to ='/'>Home </Link>
            <Link to ='/about'>About</Link>
            <Link to ='/search'>Search</Link>
          </div>

          <br />

          <div>
            <Route exact path="/" render={() => {
              return (
              <Dashboard stocks={this.state.stocks} stockLink = {this.stockLink}/>
            )
          }} />
          <Route path='/stocks/:symbol' render={()=>{
              return(
                <Stock clickStock={this.state.clickStock}/>
              )
            }}/>

          <Route path='/about' render={() => {return(<About /> )}} />
          <Route path='/search' render={() => {return(<Search />)}} />
          </div>

        </div>
      </Router>
    );
  }
}

export default App;

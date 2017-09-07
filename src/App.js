import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import './App.css';
import Dashboard from './Dashboard'
import stocks from '../data/stock-data'
import Stock from './Stock'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      stocks: stocks,
      clickStock: null
    }
    this.stockLink = this.stockLink.bind(this)
  }

  stockLink(e, stock) {
    this.setState({clickStock: stock})
  }

  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to ='/'>Home </Link>
            <Link to ='/about'>About</Link>
          </div>

          <br />

          <div>
            <Route path="/" render={() => {
              return (
              <Dashboard stocks={this.state.stocks} stockLink = {this.stockLink}/>
            )
          }} />
          <Route path='/stocks/:symbol' render={()=>{
              return(
                <Stock clickStock={this.state.clickStock}/>
              )
            }}/>

          </div>

        </div>
      </Router>
    );
  }
}

export default App;

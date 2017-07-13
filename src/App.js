import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import './App.css';
import About from './About'
import StockList from './StockList'
import axios from 'axios'
import stocks from '../data/stock-data'
import Stock from './Stock'

class App extends Component {
  constructor(){
    super()
    this.state = {
      stocks: stocks,
      currentStock: null
    }
    this.showStockFunction = this.showStockFunction.bind(this)
  }
  showStockFunction(e, stock){
    this.setState = {
      currentStock: stock
    }
  }
  render() {
    return (
      <Router>
        <div>
          <nav className="nav">
            <div className="nav-item"><span className="nav-logo">iStocks</span></div>
            <div className="nav-item"><Link to="/home">Home</Link></div>
            <div className="nav-item"><Link to="/search">Search</Link></div>
            <div className="nav-item"><Link to="/about">About</Link></div>
          </nav>
          <main>
            <Route path="/home" render={ ()=>{
              return(
                <StockList stocks={this.state.stocks} showStock={this.ShowStock}/>
              )
            }}/>
            <Route path="/stocks/*" render={ ()=>{
              return(
                <Stock showStock={this.state.currentStock}/>
              )
            }}/>
            <Route path="/about" render={ ()=>{
              return(
                <About />
              )
            }}/>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import './App.css';
import Dashboard from './Dashboard.js'
import data from '../data/stock-data'
import Stock from './Stock.js'

class App extends Component {
  constructor() {
    super();
      this.state = {
        stocks: data,
        currentStock: null
      }
  this.clickStock = this.clickStock.bind(this)
  }
  clickStock(e,input){
    this.setState({
      currentStock: input
    })
  }

  render() {
    return (
      <Router>
        <div>
          <div className="nav">
            <div className="nav-item"><span className="nav-logo">iStocks</span></div>
            <div className="nav-item"><Link to="/">Home</Link></div>
            <div className="nav-item"><Link to="/search">Search</Link></div>
            <div className="nav-item"><Link to="/about">About</Link></div>
          </div>

          <main>
            <Route
              path="/" 
              render={()=>{
                return <Dashboard stocks={this.state.stocks}
                                  clickStock={this.clickStock}
                 />
              }} 
            />
            <Route
              path="/stocks/*"
              render={()=>{
                if(false){<Redirect />}
                return(
                    <Stock currentStock={this.state.currentStock} />
                  )
              }} 
            />
            <Route
              path="/about"
              render={()=>{
                return(
                    <div>
                      <h2>About</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit dolores voluptatem expedita eos et provident reiciendis sunt quos ipsam exercitationem assumenda magni ipsum neque dignissimos distinctio tenetur voluptate, sed pariatur.
                      </p>
                    </div>
                  )
              }} 
            />

          </main>
        </div>
      </Router>
    );
  }
}

export default App;

//             




import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom"
import './App.css';
import StockList from '../Stock/StockList.js';
import Stock from '../Stock/Stock.js';
import About from '../About.js';
import seeds from '../../../data/stock-data.json'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      stocks: seeds,
      selectedStock: ''
    }
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
              exact path='/'
              render={() => {
                return (
                  <StockList stocks={this.state.stocks}/>
                )

              }}
            />
            <Route
              path='/stocks/:symbol'
              component={Stock}
            />
          </main>
          <Route
            path='/about'
            component={About}
          />
      </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Dashboard from './Dashboard'
import About from './About'
import Stock from './Stock'
import Search from './Search'
import axios from 'axios'

import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom"
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchInput: null,
      searchedStock: null,
      hasSearched: false
    }
  }

  handleSearchInput(e) {
    this.setState({
      searchInput: e.target.value
    })
  }

  handleSearchSubmit(e) {
    e.preventDefault()
    axios.get(`http://finance.google.com/finance/info?client=ig&q=${this.state.searchInput}`
    ).then((response) => {
      this.setState({
        searchedStock: JSON.parse(response.data.slice(3)),
        hasSearched: true
      })
    })
  }
  render() {

    return (
      <Router>
        <div>

          <nav>
            <h1>React-Router-Lab</h1>
            <Link to="/">Home</Link>
            <Link to="/search">Search</Link>
            <Link to="/about">About</Link>
          </nav>

          <main>

          <Route exact path="/" render={() => <Dashboard/>} />
          <Route path="/about" component={About} />
          <Route path="/stocks/:symbol" component={Stock} />
          <Route path="/search" render={() => <Search
            onSearchInput={(e) => this.handleSearchInput(e)}
            onSearchSubmit={(e) => this.handleSearchSubmit(e)}
            searchedStock={this.state.searchedStock}
            hasSearched={this.state.hasSearched}
            />}
          />
          </main>

        </div>
      </Router>
    );
  }
}

export default App;

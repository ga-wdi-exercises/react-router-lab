import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import './App.css';
import jdata from '../../../data/stock-data.json'
import Home from '../Home/Home.js'
import Search from '../Search/Search.js'
import About from '../About/About.js'

class App extends Component {

  constructor(){
    super()

    this.state = {
      data: jdata,

    }
  }

  render() {
    return (
      <Router>
        <div>
            <nav>
            <h1>Stocks</h1>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/search">Search</Link>
            </nav>
              <main>
                <Route
                  path="/"
                  render={() => {
                    return(
                      <Home
                        data={this.state.data}
                        />
                    )
                  }}/>
                <Route
                  path="/search"
                  render={() =>{
                    return(
                      <Search />
                    )
                  }}/>
                <Route
                  path="/about"
                  render={() => {
                    return(
                      <About />
                    )
                  }}/>
                <Route
                  path="/*"
                  render={() => {
                    return <Redirect to="/" />
                  }}/>
              </main>
        </div>
      </Router>
    );
  }
}

export default App;

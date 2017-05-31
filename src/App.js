import React, { Component } from 'react';
import axios from 'axios'
import {
  BrowserRouter as Router,
  Route,
  Link,
  // Redirect
} from "react-router-dom"
import './App.css';
import Dashboard from './Dashboard.js'
import Stock from './Stock.js'
import About from './About.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      stocks: [],
      hasSearched: false
    }
  }
  componentDidMount(){
    axios.get("http://localhost:3000/stocks").then((response) => {
      this.setState({
        stocks: response.data
      })
    })
  }
  render() {
    return (
      <Router>
        <div>
          <nav>
            <h1>Stock Checker</h1>
            <div>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/Search">Search</Link>
            </div>
          </nav>
          <main>
            <Route
              exact path='/'
              render={() => {
                return (
                  <Dashboard stocks={this.state.stocks} />
                )
              }}
            />
            <Route path='/stocks/:symbol' component={Stock}/>
            <Route path="/about" component={About} />
          </main>
        </div>
      </Router>
        );
        }
      }






export default App;

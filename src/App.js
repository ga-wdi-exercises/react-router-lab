import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import './App.css';
import About from "./About"
import axios from "axios"
import Dashboard from "./Dashboard"
import Stock from "./Stock"
import Search from "./Search"


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      stocks: [],
      tracked: false
    }
    this.handleTrackedState = this.handleTrackedState.bind(this)
  }
  componentDidMount(){
    axios.get("http://localhost3000/stocks").then((response)=> {
      this.setState({
        stocks: response.data
      })
    })
  }
  handleTrackedState(new){
    let newStock=this.state.stocks
    newStock.push(new)
    this.setState({
      stocks: newStock,
      hasTracked: true
    })
  }
  render() {
    return (
      <Router>
        <div className="route-wrapper">
          <div className="header">
            <div className="nav-link"><Link to="/">Home</Link></div>
            <div className="nav-link"><Link to="/about">About</Link></div>
            <div className="nav-link"><Link to="/search">Stock Search</Link></div>
          </div>

          <div className="body">
            <Route exact path="/" render={()=> <Dashboard stocks={this.state.stocks} />} />
            <Route path="/about" component={About} />
            <Route path="/stocks/:symbol" component={Stock} />
            <Route path="/search" render={()=>
                if(this.state.hasTracked){
                  return <Redirect to="/" />
                }
                return <Search handleTrackedState={this.handleTrackedState} />
            }} />
          </div>
        </div>

      </Router>
    );
  }
}

export default App;

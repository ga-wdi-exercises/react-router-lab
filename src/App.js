import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import axios from "axios"
import Dashboard from "./Dashboard"
import About from "./About"
import Stock from "./Stock"
import Search from "./Search"
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      stocks: [],
      hasTracked: false
    }
    this.handleTrack = this.handleTrack.bind(this)
  }
  componentDidMount(){
    axios.get("http://localhost:3000/stocks").then((response) => {
      this.setState({
        stocks: response.data
      })
    })
  }

  handleTrack(newStock){
    let temporary = this.state.stocks
    temporary.push(newStock)
    this.setState({
      stocks: temporary,
      hasTracked: true
    })
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/search">Search</Link>
          </nav>

          <Route exact path="/"
            render={() =>
              <Dashboard
                stocks={this.state.stocks}
              />
            }
          />

          <Route path="/about"
            render={() =>
              <About

              />
            }
          />

          <Route path="/stocks/:symbol"
            component={Stock}
          />

          <Route path="/search"
            render={() => {
              if(this.state.hasTracked){
                return <Redirect to="/" />
              }
              return(
              <Search handleTrack={this.handleTrack}/>
              )}}
          />

        </div>
      </Router>
    );
  }
}

export default App;

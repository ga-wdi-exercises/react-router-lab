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
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      stocks: []
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
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
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

        </div>
      </Router>
    );
  }
}

export default App;

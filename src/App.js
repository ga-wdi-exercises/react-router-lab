import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from "react-router-dom"
import './App.css';
import axios from "axios"
import Dashboard from './Dashboard.js'
import Stock from "./Stock.js"
import About from "./About.js"
import Search from "./Search.js"


class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            stocks: [],
            hasSearched: true
        }
        this.handleSearchedState = this.handleSearchedState.bind(this)
    }
    componentDidMount(){
        axios.get("http://localhost:3000/stocks").then((response) => {
            this.setState({
                stocks: response.data
            })
        })
    }
    handleSearchedState(newStock){
        let tempArray = this.state.stocks
        tempArray.push(newStock)
        this.setState({
            stocks: tempArray,
            hasSearched: true
        })
    }
    render() {
        return (
            <Router>
            <div>
            <nav>
            <h2>Stock Data</h2>
            <div>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/search">Search</Link>
            </div>
            </nav>

            <main>
            <Route
            exact path="/"
            render={() => {
                return (
                    <Dashboard stocks={this.state.stocks} />
                )
            }}
            />

            <Route
            path="/stocks/:symbol" component={Stock} />
            <Route
            path="/about" component={About} />
            <Route path="/search" render={() => {
              if(this.state.hasSearched){
                return <Redirect to="/" />
              }
              return <Search handleSearchedState={this.handleSearchedState} />
            }} />
            </main>
            </div>
            </Router>
        );
    }
}

export default App;

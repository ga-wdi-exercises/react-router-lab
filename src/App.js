import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from 'react-router-dom'
import StockList from './StockList'


class App extends Component {



  render() {
    return (
        <Router>
            <div>
                <nav>
                    Tick my Stock {'\u00A0'}
                    <Link to="/home"> Home </Link> {'\u00A0'} | {'\u00A0'}
                    <Link to="/about"> About </Link>
                </nav>
                <StockList />
            </div>
        </Router>

    );
  }
}

export default App;

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="nav">
            <h2>Stockzzz</h2>
            <Link to=""></Link>
            <Link to=""></Link>
          </nav>
          <main>

          </main>
        </div>
      </Router>
    );
  }
}

export default App;

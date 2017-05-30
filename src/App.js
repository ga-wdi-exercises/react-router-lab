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
          <nav>
            <Link to=""></Link>
            <Link to=""></Link>
          </nav>
          <main>
            <Route path="" render={}/>
            <Route path="" render={}/>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;

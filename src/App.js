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
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
          </nav>
          <main>
            <Route
              path="/home"
              render={<Home />}
            />
            <Route path="/about" render={<About />} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;

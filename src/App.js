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
            <div className="nav">
              <div className="nav-item"><Link to="/">Home</Link></div>
              <div className="nav-item"><Link to="/about">About</Link></div>
            </div>
          </nav>
          <main>
            <Route
              path="/home"
            />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;

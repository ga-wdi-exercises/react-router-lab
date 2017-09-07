import React, { Component } from 'react';
import Dashboard from './Dashboard.js'
import About from './About.js'
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
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            </nav>
            <main>
              <Route path ="/"
                render={() => {
                  return (< Dashboard  />)
                }}
              />
            </main>
        </div>
      </Router>
    );
  }
}

export default App;

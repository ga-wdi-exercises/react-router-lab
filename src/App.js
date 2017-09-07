import React, { Component } from 'react';
import Dashboard from './Dashboard.js'
import About from './About.js'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
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
                render={(props) => {
                  return (< Dashboard  {...props}/>)
                }}
              />
              <Route path ="/about"
                render={() => {
                  return (< About  />)
                }}
              />
            </main>
        </div>
      </Router>
    );
  }
}

export default App;

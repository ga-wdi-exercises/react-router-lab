import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import './App.css';
import Home from './Home';
import About from './About'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/Home">Home</Link>
            <Link to="/About">About</Link>
          </nav>
          <main>
            <Route path="/Home"
            render={() => {
              return <Home  />}}/>
            <Route path="/About"
            render={() => {
              return <About />
            }}/>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;

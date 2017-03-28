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
          <Link to="/Home">Home</Link>|<Link to="/About">About</Link>
            </nav>
            <Route
              path="/Home"
              render={()=> {
                return(
                  <h2>Home</h2>
                )
              }}
            />
          </div>
      </Router>
    );
  }
}

export default App;

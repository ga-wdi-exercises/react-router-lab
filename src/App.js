import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      
    }
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <h1>WDI Stock Tracker</h1>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
          </nav>
          <main>
            <Switch>
            <Route
              path="/home"
              render={(props) => {
                return (
                  <Search
                  {...props}
                  translation={ this.state.translation }
                  setTranslation={ (data, language) => this.setTranslation(data, language) }
                  />
                )
              }}
            />
            <Route
              path="/about"
              render={(props) => {
                return (
                  <Results
                    {...props}
                    translation={ this.state.translation }
                    language={this.state.langauge}
                  />
                )
              }}
            />
            <Route
              path="/*"
              render={() => {
                return (
                  <Redirect to="/home" />
                )
              }}
            />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;

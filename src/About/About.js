import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"

class About extends Component {
  render() {
    return (
      <Router>
        <div>
          <main>
            <Route
              path="/about"
              render={() => {
                return (
                  <main>
                    <h1>About</h1>
                    <p>This was a very hard lab! About stocks no less!!!</p>
                  </main>
                )
              }}
             />
          </main>
        </div>
      </Router>
    )
  }
}

export default About;

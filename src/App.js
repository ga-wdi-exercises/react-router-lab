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
     data: data
     }
   }
   render() {
     return (
       <Router>
         <div>
         <main>
           <nav>
           <Link to="/">Dashboard</Link>
                      <Link to="/stocks/:symbol">Stock</Link>
                      <Link to="about">About</Link>
                      </nav>

                      <Route
                      path="/"
                      render= {() => {
                        return(
                        <Dashboard stocks={this.state.stocks}/>
                        // return <Dashboad stock= {}/>
                          )
                        }}
                      />

                      <Route
                      path="/stocks/:symbol"
                      render= {() => {
                        return(
                        <Stock = {} />
                          )
                        }}
                      />

                      <Route
                        path="/about"
                        render= {() => {
                          return(
                          <About />
                          )
                        }}
                      />

                      <Route
                        path="/*"
                        render={() => {
                          return <Redirect to="/" />
                          }}
                        />

                      </main>
                    </div>
                    </Router>
                    );
                    }
                    }


export default App;

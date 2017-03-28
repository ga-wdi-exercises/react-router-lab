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

      <div className="nav">
        <div className="nav-item"><span className="nav-logo">iStocks</span></div>
        <div className="nav-item"><Link to="/">Home</Link></div>
        <div className="nav-item"><Link to="/search">Search</Link></div>
        <div className="nav-item"><Link to="/about">About</Link></div>
      </div>
      <main>
         <Route
         path="/search"
         render={() =>{
           return(

               <h2>Hello</h2>

           )
         }  }
         />

         <Route
      path="/about"
      render={() =>{
        return(
           <h2>About</h2>

        )
      }  }
      />

      <Route
      path="/"
      render={() => {
        return <h2>Home page</h2>
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

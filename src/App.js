import React, { Component } from 'react';
import data from '../data/stock-data.json'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import About from "./About"
import Dashboard from './Dashboard'
import './App.css';

console.log(data)

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      stocks: data
    }
  }
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

       component={About}

      />

   <Route exact path="/" render={() => {
      return <Dashboard stocks={this.state.stocks}/>
      }}/>

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

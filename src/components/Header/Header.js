import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import './Header.css';


class Header extends Component {
  render() {
    return (
        <nav>
          <Link to="/dashboard">Home</Link>
          <Link to="/about">About</Link>
        </nav>
    );
  }
}

export default Header;

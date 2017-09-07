import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import './About.css';


class About extends Component {
  render() {
    return (
        <div>
          <p>Stocks Today is THE stock-tracking application for the executive on the go. Sign up for just $99.99 a day.</p>
        </div>
    );
  }
}

export default About;

import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
// import SearchContainer from '../SearchContainer'
import './App.css';



class MyStocks extends Component {
  constructor(props) {
  super(props)
  this.state = {
    name: this.props.name,
    symbol: this.props.symbol,
    selectedVoice: null,
    textPronunciation: null,
    audioPronunciationSource: null
  }
}
  render() {
    return (
      // let list this.props.map((stocks)) => {
        <li>{stock.name}<a href></a>
      }

      )

}


export default myStocks

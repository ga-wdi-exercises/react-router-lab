import React, { Component } from 'react';
import './Stock.css'

export default class Stock extends Component {
  render() {
    return (
      <div className="stocks">
        <span>{this.props.name}</span>
        <span>({this.props.symbol})</span>
      </div>
    )
  }
}

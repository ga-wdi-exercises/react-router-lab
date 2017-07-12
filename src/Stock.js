import React, { Component } from 'react'
import './Stock.css'
import { Button } from 'react-bootstrap';

export default class Stock extends Component {
    render() {
        return (
            <li className="Stock">
                <a className="symbol">{this.props.showStock.symbol}</a>
                <span> - </span>
                <span>{this.props.showStock.name}</span>
            </li>
        );
    }
}
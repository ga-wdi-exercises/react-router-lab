import React, { Component } from 'react'
import './Stock.css'
import { Button } from 'react-bootstrap';

export default class Stock extends Component {
    render() {
        return (
            <li className="Stock">
                <a href="" className="symbol">{this.props.symbol}</a>
                <span> - </span>
                <span>{this.props.name}</span>
            </li>
        );
    }
}
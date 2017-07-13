import React, { Component } from 'react'
import './Stock.css'
import { Button } from 'react-bootstrap';

export default class Stock extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <li className="Stock">
                <a className="symbol">{this.props.currentStock.symbol}</a>
                <span> - </span>
                <span>{this.props.currentStock.name}</span>
            </li>
        );
    }
}
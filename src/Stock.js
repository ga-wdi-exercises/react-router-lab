import React, { Component } from 'react'
import './Stock.css'
import { Button } from 'react-bootstrap';

export default class Stock extends Component {
    constructor(props){
        super(props)
        this.state = {
            stock: this.props.location.stock.selection
        }
    }
    render() {
        return (
            <li className="Stock">
                <a className="symbol">{this.state.stock.symbol}</a>
                <span> - </span>
                <span>{this.state.stock.name}</span>
            </li>
        );
    }
}
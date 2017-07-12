import React, { Component } from 'react'
import './StockList.css'
import Stock from './Stock'

export default class StockList extends Component {
    render() {
        return (
            <div className="StockList">
                <ul className="list">
                    <Stock />
                </ul>
            </div>
        );
    }
}
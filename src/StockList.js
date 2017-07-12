import React, { Component } from 'react'
import './StockList.css'
import Stock from './Stock'

export default class StockList extends Component {
    render() {
        const stocks = this.props.stocks.map((stock, index)=>{
            return <Stock name={stock.name} symbol={stock.symbol} key={index} />
        })
        return (
            <div className="StockList">
                <ul className="list">
                    {stocks}
                </ul>
            </div>
        );
    }
}
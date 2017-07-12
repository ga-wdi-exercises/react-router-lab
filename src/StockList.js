import React, { Component } from 'react'
import './StockList.css'
import Stock from './Stock'
import { Link } from 'react-router-dom'

export default class StockList extends Component {
    render() {
        const stocks = this.props.stocks.map((stock, index)=>{
            return (
                <div className="Stock">
                    <Link className='Link' to={{
                        pathname: '/stocks/' + stock.symbol
                    }} key={index} onClick={(e) => {this.props.showStock(stock)}}>{stock.symbol}</Link>
                    <span> - </span>
                    <span>{stock.name}</span>
                </div>
                )
        })
        return (
            <div className="StockList">
                    {stocks}
            </div>
        );
    }
}
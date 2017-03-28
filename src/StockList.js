import React, { Component } from 'react'
import {
    Link,
} from 'react-router-dom'


class StockList extends Component {
    constructor(props){
        super(props)
    }

    render() {
        let stocks = this.props.stocks.map((stock, index) => {
            let pathname = `/stocks/${stock.symbol}`

            return(
                <li id={index + 1} name={stock.name}>
                    {stock.name}
                    <Link to={{
                        pathname,
                    state: {selectedStock: stock}

                    }}> {stock.symbol} </Link>
                    </li>
            )
        })
        return(
            <div>
                {stocks}
            </div>
        )
    }
}

export default StockList;
import React, { Component } from 'react'


class StockShow extends Component {
    constructor(props){
        super(props)
        this.state = {
            stock: this.props.location.state.selectedStock
        }
    }


    render(){

        return(
            <div>
                <h2> {this.state.stock.name}</h2>
            </div>
        )
    }
}

export default StockShow
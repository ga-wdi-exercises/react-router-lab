import React, { Component } from 'react'

class Search extends Component{

    getStockData(){

    }
    onSearchSubmit(){


    }

    render(){
        return(
            <div>
                <form onSubmit={this.onSearchSubmit}>
                <label>
                    Search:
                    <input type="text" placeholder="Search by a stocks ticker" />
                </label>
                </form>
            </div>

        )
    }
}

export default Search
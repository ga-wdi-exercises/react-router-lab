import React, { Component } from 'react'

class Search extends Component{


    render(){
        return(
            <div>

                <label>
                    Search:
                    <input type="text" placeholder="Search by a stocks ticker" />
                </label>
            </div>

        )
    }
}

export default Search
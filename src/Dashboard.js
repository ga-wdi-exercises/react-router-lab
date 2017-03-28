import React, { Component } from 'react'
import { link } from "react-router-dom"

class Dashboard extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <Router>
        <div>
          <Route
            path="/Home"
            render={()=> {
              return(
                <h2>Home</h2>
              )
            }}
          />
        </div>
      </Router
    )

    })
  }
}

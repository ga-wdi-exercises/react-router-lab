import React, {Component} from 'react'
import {Link} from "react-router-dom"


class Home extends Component{

 render(){
   let data = this.props.stockData.map((stock, index) => {
     return(
       <li key={index}>{stock.name} {stock.symbol}</li>
     )
   })

   return(
     <div>
         <ul>
           {data}
         </ul>
     </div>
   )
 }
}

export default Home

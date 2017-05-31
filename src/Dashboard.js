import React, {Component} from 'react'
import './Dashboard.css'

class Dashboard extends Component {
  constructor (props){
  }
}

render (){
  let stocks = this.props.stocks.map((stock,i) => {
    let path = '/stocks/${stock.symbol}'
    return <li className='stocks-stock' key={1}>
        {stock.name} (<Link to ={{
          path, state: {selectedStock: stock}
        }})
  })
}

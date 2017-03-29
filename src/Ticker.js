import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Ticker extends Component {
  constructor(props){
    super(props)
    console.log(props)

  }
  render() {
    let link = `/stocks/${this.props.stock.symbol}`
    return (
      <div>
        <li>{this.props.stock.name} - (<Link to={{
            pathname: link,
            state: {stock: this.props.stock}
          }}>{this.props.stock.symbol}</Link>)</li>
      </div>
    );
  }
}

export default Ticker;


<Link to={{
  pathname: '/courses',
  search: '?sort=name',
  hash: '#the-hash',
  state: { fromDashboard: true }
}}/>

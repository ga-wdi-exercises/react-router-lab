import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class Dashboard extends Component {
  render() {
  let stocks = this.props.stocks.map((stock, i) => {
    let pathname = `/stocks/${stock.symbol}`
    return <li key={i}>
             {stock.name}
             (<Link to={{ pathname, state: {selectedStock: stock}}}>
              {stock.symbol}
              </Link>)
           </li>
  })
  return (
    <div>
      <h3>Stocks</h3>
      <ul>
        {stocks}
      </ul>
    </div>
  );
}
}

export default Dashboard;

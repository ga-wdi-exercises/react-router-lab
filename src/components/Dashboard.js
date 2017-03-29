import React, {Component} from 'react'


class Dashboard extends Component {
  render(){
    var list = this.props.data.map((data, index) => {
      return(
        <div key={index}>
          <p>{data.name} ({data.symbol})</p>
        </div>
      )
    })
    return(
      <div>
        <div className="stocks">
          <h2>Stocks</h2>
            <ul className="stocks-list">
              <li>{list}</li>
            </ul>
          </div>
      </div>
    )
  }
}


export default Dashboard;

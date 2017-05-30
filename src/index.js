import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import stocks from '../data/stock-data.json'

ReactDOM.render(
  <App stocks={stocks} />,
  document.getElementById('root')
);

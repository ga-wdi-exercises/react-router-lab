import $ from 'jquery'
import data from '../data/stock-data.json'

export function queryStocks (query) {
var source = '../data/stock-data.json'

  return $.getJSON(source).then(function(response) {
    return response["Search"]
  });
}

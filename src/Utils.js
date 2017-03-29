import $ from 'jquery'

export function queryStocks (query) {
var source = '../data/stock-data.json'

  return $.getJSON(source).then(function(response) {
    return response["Search"]
  });
}

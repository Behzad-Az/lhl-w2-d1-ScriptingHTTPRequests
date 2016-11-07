var getHTML = require('../step5Http-functions');

var requestOptions = {
  host: 'https://sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {
  console.log(html.toUpperCase());
}

getHTML(requestOptions, printUpperCase);
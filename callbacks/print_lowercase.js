var getHTML = require('../step5Http-functions');

var requestOptions = {
  host: 'https://sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase (html) {
  console.log(html.toLowerCase());
}

getHTML(requestOptions, printLowerCase);
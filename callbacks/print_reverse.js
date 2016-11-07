var getHTML = require('../step5Http-functions');

var requestOptions = {
  host: 'https://sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {
  console.log(html.split('').reverse().join(''));
}

getHTML(requestOptions, printReverse);
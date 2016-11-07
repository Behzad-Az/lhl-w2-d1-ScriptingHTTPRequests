var getHTML = require('./step5Http-functions');

var requestOptions = {
  host: 'https://sytantris.github.io',
  path: '/http-examples/step2.html'
};

function printHTML (html) {
  console.log(html);
}

getHTML(requestOptions, printHTML);
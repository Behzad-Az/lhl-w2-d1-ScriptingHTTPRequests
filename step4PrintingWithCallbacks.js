function getHTML (options, callback) {


  /* Add your code here */
  var http = require('https');
  var link = options.host + options.path;
  var output = '';

  http.get(link, (httpResponse) => {
    httpResponse.setEncoding('utf8');

    httpResponse.on('data', function (chunk) {
      output += chunk;
    });

    httpResponse.on('end', () => {
      printHTML(output);
    });

  });

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'https://sytantris.github.io',
  path: '/http-examples/step2.html'
};

getHTML(requestOptions, printHTML);
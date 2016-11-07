function getAndPrintHTML () {

  var requestOptions = {
    host: 'https://sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
  var http = require('https');
  var link = requestOptions.host + requestOptions.path;
  var output = '';

  http.get(link, (httpResponse) => {
    httpResponse.setEncoding('utf8');

    httpResponse.on('data', function (chunk) {
      output += chunk;
    });

    httpResponse.on('end', () => {
      console.log(output);
    });

  });

}

getAndPrintHTML();
function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'https://sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */
  var http = require('https');
  var link = requestOptions.host + requestOptions.path;

  http.get(link, (httpResponse) => {
    httpResponse.setEncoding('utf8');


    httpResponse.on('data', function (chunk) {
      console.log(chunk + '\n');
    });

  });

}

getAndPrintHTMLChunks();
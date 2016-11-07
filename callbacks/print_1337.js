var getHTML = require('../step5Http-functions');

var requestOptions = {
  host: 'https://sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function password (str) {

  var object = {
    ck : 'x',
    er : '0r',
    you : 'j00',
    a : "4",
    e : "3",
    o : "0",
    l : "1",
    s : '5',
    t : '7'
  }

  function obfuscate(phrase, object){
    var objkeys = Object.keys(object);
    objkeys.forEach(function(key) {
      var regExp = new RegExp(key,"gi");
      phrase = phrase.replace(regExp, object[key]);
    });
    return phrase;
  }
  console.log(obfuscate(str, object));
}

getHTML(requestOptions, password);
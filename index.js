//webserver for covid-19 project
var http = require('http');
var url = require('url');
var fs = require('fs');
var today = new Date();//https://www.w3schools.com/jsref/jsref_obj_date.asp
var done = 0;
//last_date.json contains date that was last updated.
//check if this is a different day from the last one.
//readFile & writeFile are asynchronous

fs.readFile('last_date.json','utf8', (err, str) => {
  if (err) {
    console.log("Error reading .json file:",err);
    return;
  }
  try {
    const last = JSON.parse(str);
    console.log("assigned JSON object to last");
  }
  catch(err) {
    console.log("Error parsing JSON string: ", err);
  }
});
console.log(today.getMonth() + ' ' + today.getDate() + ' ' + today.getFullYear());//4 18 2020

var reqListener = function(req, res) {
  res.writeHead(200);
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;//need to parse so can get filename
  fs.readFile(filename, function(err, data) { // how does readFile work?
    if (err) {
      res.writeHead(404, {'Content':'text/html'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
};

var server = http.createServer(reqListener);
server.listen(8080);

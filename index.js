//webserver for covid-19 project
var http = require('http');
var url = require('url');
var fs = require('fs');
var today = new Date();//https://www.w3schools.com/jsref/jsref_obj_date.asp
var done = 0;
var PouchDB = require('pouchdb');
var db = new PouchDB('my_database');
//https://pouchdb.com/download.html

//last_date.json contains date that was last updated.
//check if this is a different day from the last one.
//readFile & writeFile are asynchronous

/*fs.readFile('last_date.json','utf8', (err, str) => {
  if (err) {
    console.log("Error reading .json file:",err);
    return;
  }
  //try {
    var last = JSON.parse(str);//will contain the last date the site was updated.
    console.log("assigned JSON object to last");
    console.log(last.month);
    done = 1;
  //}
  catch(err) {
    console.log("Error parsing JSON string: ", err);
  }
});*/
var last = JSON.parse('{"day_since_start": 134,"month": 5,"date": 13,"year": 2020}');
console.log(last.month);
let currMonth = today.getMonth() + 1;//current month 1-12
let currDate = today.getDate();//date 1-31
let currYear = today.getFullYear();//year
console.log(currMonth + ' ' + currDate + ' ' + currYear);//4 18 2020
if (last.month != currMonth || last.date != currDate || last.year != currYear) {//if didn't update today.
    var updates = days_since_start(currMonth, currDate, currYear) - last.days_since_start;//number of updates
    console.log("updates: " + updates);
}
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

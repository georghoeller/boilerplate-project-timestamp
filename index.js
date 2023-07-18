// index.js
// where your node app starts
require('dotenv').config();

// init project
var express = require('express');
var app = express();

const bodyParser = require('body-parser');


// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));


// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/:date", function (req, res) {
  const date = req.params.date;
  console.log('DATE INPUT:',date);
  console.log('DATE INPUT:',typeof date);

  // 3 conditions: 
  // empty: Date.now();
  // is string: dateUnix
  // is number: dateUtc


  const dateUnix = new Date(date).toUTCString();
  // const dateUnix = Math.floor(new Date(date).getTime() / 1000)
  const dateUtc = Date.parse(date);

  console.log('DATE INPUT in unix:', dateUnix);
  console.log('DATE INPUT in unix:',typeof dateUnix);
  console.log('DATE INPUT in unix:', dateUtc);
  console.log('DATE INPUT in unix:',typeof dateUtc);


  res.json({
    unix: dateUnix,
    utc: dateUtc
  });

  // if object has not a valid structure (ie: yyyy-mm-dd or number)
  res.json({ error : "Invalid Date" })


});


// Example Usage:
// [project url]/api/2015-12-25
// [project url]/api/1451001600000
// Example Output:
// {"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"}



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

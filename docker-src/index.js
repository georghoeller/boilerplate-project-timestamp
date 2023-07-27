
// CHECK OUT TUTORIAL:
// https://www.youtube.com/watch?v=LW26kpjGl2c

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


app.get('/api/:date', function (req, res, next) {
  
  var date = req.params.date.toString();
  var dateToUnix = Date.parse(date);
  var dateToUtc = new Date(date).toUTCString();

    console.log('date',date, typeof date)
    console.log('dateToUnix',dateToUnix)
    console.log('dateToUtc',dateToUtc)

  if ( !isNaN(dateToUnix) )  res.json( {unix: dateToUnix, utc: dateToUtc} );
  else next();

}, function(req, res, next){

  var date = Number( req.params.date );
  var dateToUnix = date;
  var dateToUtc = new Date(date).toUTCString();

    console.log('date',date, typeof date)
    console.log('next dateToUnix',dateToUnix)
    console.log('next dateToUtc',dateToUtc)

  if ( !isNaN(dateToUnix) ) res.json( {unix: dateToUnix, utc: dateToUtc} ); //date is valid unixt timesatmp 
  else next();

}, function(req,res){
  res.json({ error : "Invalid Date" });
});


app.get('/api', function (req, res) {
    res.json({ unix: Date.now(), utc: new Date(Date.now()).toUTCString() });
});




// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});



// // check this out
// app.get('/user/:id', function (req, res, next) {
//   // if the user ID is 0, skip to the next route
//   if (req.params.id == 0) next('route');
//   // otherwise pass the control to the next middleware function in this stack
//   else next(); //
// }, function (req, res, next) {
//   // render a regular page
//   res.render('regular');
// });


// Example Usage:
// [project url]/api/2015-12-25
// [project url]/api/1451001600000
// Example Output:
// {"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"}

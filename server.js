// includes express library
var express = require('express');
var app = express();
var path = require('path');

// creates server route to static files
app.use(express.static(__dirname + "/client/static"))
// creates server route to views
app.set('views',path.join(__dirname,'./client/views'));
app.set('view engine', 'ejs');


var routes_setter = require('./server/config/routes.js');
routes_setter(app);

//Enable CORS Headers
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(8000,function(){
  console.log('Plalia Coding Challenge 1 on port 8000')
})

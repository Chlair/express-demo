var express = require('express');
var bodyParser = require('body-parser');

var path = require('path');

var app = express();

/*
var logger = function (req, res, next) {
  console.log('logging....');
  next();
}

app.use(logger);
*/

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// set static path
app.use(express.static(path.join(__dirname, 'public')));

/*
var person = {
  name: 'jone',
  age: 13
}
*/

// view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/',function (req, res) {
  res.render('index', {
    title: 'Customers',
  });
});

app.listen(3000, function() {
  console.log('server start on port 300');
});


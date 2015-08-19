var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


var app = express();

// configure app

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// use middleware

app.use(express.static(path.join(__dirname, 'bower_components'))); // to give permission to use bower bootstrap
app.use(bodyParser());


// define routes

app.use(require('./todo'));

var port = process.env.PORT || 3000;

app.listen(3000, function(req, res){
	console.log('ready on port ' + port);
});

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var nodeMailer = require('nodemailer');
var app = express();

//use template engine 'jade' and render template files
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json())//to setup bodyparser middlelayer
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

//route to browser
app.get('/', function(req,res){
  res.render('index',{title:'Welcome'});
});

app.get('/about', function(req,res){
  res.render('about');
});

app.listen(3000);
console.log('Server running at 3000');

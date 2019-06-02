var express = require('express');
var path = require('path');
var app = express();
var handler = require('./routes/handler');
const mime = require('mime');
var port = 7000 ;

// var session=require('express-session');
var cookieParser = require('cookie-parser');
app.use(cookieParser());var request = require('request');
var exphbs = require('express-handlebars');

var handlebars = require('express-handlebars');

app.use(express.static(path.join(__dirname,"public")));
// app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));


app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, '/views')
}));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'handlebars');
app.listen(port,()=>{
app.use('/',handler);
});
module.exports = app;

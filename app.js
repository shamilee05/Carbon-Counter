var express = require('express');
var path = require('path');
var app = express();
var handler = require('./routes/handler');
const mime = require('mime');
// var port = 7000 ;

// var session=require('express-session');
var cookieParser = require('cookie-parser');
app.use(cookieParser());
// document.write('<script type="text/javascript" src = "https://apis.google.com/js/platform.js"></script>');

var port = process.env.PORT;
var request = require('request');
var exphbs = require('express-handlebars');

var handlebars = require('express-handlebars');

app.use(express.static(path.join(__dirname,"public")));
// app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));



// app.use(session({
//    // key: 'session_cookie_name',
//     secret: 'session_cookie_secret',
//     store: sessionStore,
//     resave: false,
//     saveUninitialized: false
// }));

// var profile ,fname,lname,email ; 
//     function init() {

// console.log(fname+"HEREEEEE?");


//         gapi.load('auth2',function(){
// console.log(fname+"HEREEEEE?");

// var GoogleUser = GoogleAuth.currentUser.get();
// // if(GoogleUser.isSignedIn())
// // {
// profile = GoogleUser.getBasicProfile();
  
//    fname =   profile.getGivenName();

//    lname =   profile.getFamilyName();
//   // var lname =   $("#email").text(profile.getFamilyName);
//   email =   profile.getEmail();

// res1 = [] ;
//    res1.cookie('fname', fname).send('cookie set'); //Sets name = express
//    res1.cookie('fname', fname).send('cookie set'); //Sets name = express
//    res1.cookie('fname', fname).send('cookie set'); //Sets name = express


// console.log(fname+"HEREEEEE?");

//         });
//     }




app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, '/views')
}));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'handlebars');
// init();
app.listen(port,()=>{
app.use('/',handler);
});
module.exports = app;

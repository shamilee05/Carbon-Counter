var express = require('express');
var path = require('path');
var app = express();
var handler = require('./routes/handler');
const mime = require('mime');
var port = 3000 ;
var request = require('request');
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

 

// let url = "https://www.carbonhub.org/v1/vehicle",
//     data = {
//     "type": "Petrol",
//     "origin": "Bhubaneswar",
//     "destination": "Mumbai",
//     "mileage": 50,
//     "mileage_unit": "km/l"
//     },
//     headers = {
//     "access-key":"ccbeca73-e148-5f81-886e-64e191f920bb",
//     "Content-Type":"application/json"
//     };

// function getVehicleEmissions(url,data,headers){

//     var options = {
//         url: url,
// method : 'POST' , 
//         headers: headers,
//         form: data
//     }
//     request(options, function (error, response, body) {
// // console.log(response.body);
// // console.log(error.body);
// console.log(response.statusCode);
//         if (!error && response.statusCode == 200) {
// console.log("HI");            // Print out the response body
//             console.log(body);
// console.log("really ? ");
//         }
//     });
// }

// app.listen(port,()=>{
// getVehicleEmissions(url,data,headers);
//     console.log('listening');
// });


module.exports = app;

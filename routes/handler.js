var express = require('express');
var router = express.Router();
var path = require('path');
//var queries = require(path.join(__dirname,'../model/queries'));
const mime = require('mime');
//var multer = require('multer');
var request = require('request');

router.get('/',(req,res)=>{
    console.log("here?");
   res.render('main');
});


router.get('/vehicle',(req,res)=>{
   res.render('vehicle',{layout: 'vehicle.handlebars'});
});


router.post('/vehicle',(req,res)=>{

console.log(req.body.type);

let url = "https://www.carbonhub.org/v1/vehicle",
    data = {
    "type": req.body.type,
    "origin": req.body.origin,
    "destination": req.body.destination,
    "mileage": req.body.mileage,
    "mileage_unit": req.body.mileage_unit
    },
    headers = {
    "access-key":"ccbeca73-e148-5f81-886e-64e191f920bb",
    "Content-Type":"application/json"
    };
getVehicleEmissions(url,data,headers);

});


function getVehicleEmissions(url,data,headers){

    var options = {
        url: url,
        method : 'POST' , 
        headers: headers,
        form: data
    }
    request(options, function (error, response, body) {
// console.log(response.body);
// console.log(error.body);
console.log(response.statusCode);
        if (!error && response.statusCode == 200) {
console.log("HI");            // Print out the response body
            console.log(body);
console.log("really ? ");
        }
    });
}

module.exports=router;
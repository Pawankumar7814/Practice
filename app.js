//All required modules
var express = require("express");
var ejs = require("ejs");
var http = require("http");

//Creating application
var app = express();

//set view engine
app.set('view engine', 'ejs');

//assign port number
var port = 2100 | process.env.port;

//Routes
app.use('/', require("../Practice/routes/mainpagesroutes"));

//Start sever
http.createServer(app).listen(port, () => {
    console.log(port);
})
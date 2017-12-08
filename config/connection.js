var express = require("express");
var exphb = require("express-handlebars");
var bodyParser = require("body-parser");
var override = require("method-override");

var mysql = require('mysql');


var app = express();
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.listen(process.env.PORT || 3000);
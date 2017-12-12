 var express = require("express");

//   Import the model (burger.js) to use it's database functions.
 var burger = require("../models/burger.js");

module.exports = function(app) {
app.get("/all", function(req, res){
    burger.all(function(allBurgers){
        res.send(allBurgers);
    })
})
}
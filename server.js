var express = require("express");
var exphb = require("express-handlebars");
var bodyParser = require("body-parser");
var override = require("method-override");
var orm = require("./config/orm");

// orm.selectAll();
// orm.updateOne(1);
// orm.insertOne("megaburger");

var app = express();
require("./controllers/burgers_controller")(app);

app.use(bodyParser.json());
app.use(express.static("public"));
app.listen(process.env.PORT || 3000);
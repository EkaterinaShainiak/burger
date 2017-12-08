var mysql = require("./connection.js");

var orm = {
    selectAll: function (callback) {
        var queryStr = "SELECT * FROM burgers";
        mysql.query(queryStr, function (err, res) {
            console.log(res);
            if (callback !== undefined) {
                callback(res);
            }
        })
    },
    updateOne: function (burger_id, callback) {
        var queryStr = "UPDATE burgers SET devoured = 1 WHERE id = ?";
        mysql.query(queryStr, [burger_id], function (err, res) {
            console.log(err);
            console.log(res);
            if (callback !== undefined) {
                callback(res);
            }
        })
    },
    insertOne: function (burger, callback) {
        var queryStr = 'INSERT INTO burgers(burger_name) VALUES (?)';
        mysql.query(queryStr, [burger], function (err, res) {
            console.log(err);
            console.log(res);
            if (callback !== undefined) {
                callback(res);
            }
        })
    }
}
module.exports = orm;
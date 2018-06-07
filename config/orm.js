// Import MySQL connection.
var connection = require("./connection.js");
var orm = {
    // selectAll()
    all: function (tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // insertOne()
    create: function (table, objCondition, cb) {
        var queryString = "INSERT INTO ?? SET ?";

        console.log(queryString);
        connection.query(queryString, [table, objCondition], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });

    },
    // updateOne()
    update: function (table, objCondition, objUpdate, cb) {
        var queryString = "UPDATE ?? SET ? WHERE ?";
        connection.query(queryString, [table, objCondition, objUpdate], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }

}

module.exports = orm;
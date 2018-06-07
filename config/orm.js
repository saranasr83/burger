// Import MySQL connection.
var connection = require("./connection.js");
var orm = {
    // selectAll()
    all: function (table, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // insertOne()
    create: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO ?? SET ?";

        console.log(queryString);
        connection.query(queryString, [table, cols, vals], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });

    },
    // updateOne()
    update: function (table, objColVals, objCondition, cb) {
        var queryString = "UPDATE ?? SET ? WHERE ?";
        connection.query(queryString, [table, objColVals, objCondition], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }

}

module.exports = orm;
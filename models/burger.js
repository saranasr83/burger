// Import the ORM to create functions that will interact with the burger database.
var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },

    create: function (objCondition, cb) {
        orm.create("burgers", objCondition, function (res) {
            cb(res);

        });
    },
    update: function(objCondition, objUpdate, cb) {
        orm.update("burgers", objCondition, objUpdate, function(res) {
            cb(res);
        });
    }
}

module.exports = burger;
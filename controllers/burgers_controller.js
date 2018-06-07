var express = require("express");

var burger = require("../models/burger.js");

//create the router
var router = express.Router();

router.get ("/", function(req,res){
    connection.query("SELECT * FROM burgers", function(error,result){
        res.render ("index", {items:result})
    })
    
})



// Export routes for server.js to use.
module.exports = router;
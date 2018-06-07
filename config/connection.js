// Set up MySQL connection.
var msql = require('mysql');
var connection;
var JAWSDB_URL = "mysql://vh9xlpgqxqyjsghe:oh69d45ebk8tj8xn@j1r4n2ztuwm0bhh5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/gumbfre28v4xnuad";



if ( process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "password",
        database: "burger_db"
      });
}
// Export connection for our ORM to use.
module.exports = connection;
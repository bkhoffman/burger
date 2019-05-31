//mysql connection
const mysql = require("mysql");

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    connection = mysql.createConnection({
    host: process.env.DEVELOPMENT_HOST, 
    port: 3306,
    user: process.env.DEVELOPMENT_USERNAME,
    password: process.env.DEVELOPMENT_PASSWORD, 
    database: process.env.DEVELOPMENT_DATABASE
  });
}
connection.connect();

module.exports = connection;


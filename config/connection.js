//mysql connection
const mysql = require("mysql");

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    connection = mysql.createConnection({
    host: process.env.HOST, 
    port: 3306,
    user: process.env.USERNAME,
    password: process.env.BURGER_ID, 
    database: process.env.DATABASE
  });
}
connection.connect();
//make the connection
// connection.connect(function(err){
//   if(err){
//     console.log("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

//Export connection for our ORM to use.
module.exports = connection;


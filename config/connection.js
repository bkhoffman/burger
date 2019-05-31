//mysql connection
const mysql = require("mysql");
//process.env.JAWSDB_URL
const connection = mysql.createConnection({
  host: "localhost", 
  port: 3306,
  user: "root",
  password: burger.password, 
  database: "burgers_db"
});

//make the connection
connection.connect(function(err){
  if(err){
    console.log("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//Export connection for our ORM to use.
module.exports = connection;


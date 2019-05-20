// Import MySQL connection.
const connection = require("../config/connection.js");


function selectAll(){
  let queryString = "SELECT * FROM burgers_db";
  connection.query(queryString, function(err, result){
    if (err) throw err;
    console.log(result);
  })
};
function insertOne(){
  let queryString = "INSERT INTO burgers_db (burger_name) VALUES (?)";
  connection.query(queryString, function(err, results){
    if (err) throw err;
    console.log(results);
  })
};
function updateOne(){
  let queryString = "UPDATE burgers_db SET ? WHERE id = ?";
  connection.query(queryString, function(err, results){
    if (err) throw err;
    console.log(results);
  })
};

module.exports = orm;
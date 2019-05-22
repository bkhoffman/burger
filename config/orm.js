// Import MySQL connection.
const connection = require("../config/connection.js");

let orm = {
  selectAll: function(){
    let queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, result){
      if (err) throw err;
      console.log(result);
    })
  },
  insertOne: function(){
    let queryString = "INSERT INTO burgers_db (burger_name) VALUES (?)";
    connection.query(queryString, function(err, results){
      if (err) throw err;
      console.log(results);
  })
  },
  updateOne: function(){
    let queryString = "UPDATE burgers_db SET ? WHERE id = ?";
    connection.query(queryString, function(err, results){
      if (err) throw err;
      console.log(results);
  })
  }
}

module.exports = orm;
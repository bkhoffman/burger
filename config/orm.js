// Import MySQL connection.
const connection = require("../config/connection.js");

let orm = {
  all: function(){
    let queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, result){
      if (err) throw err;
      console.log("ORM: select all: " + result);
      cb(result);
    })
  },
  create: function(){
    let queryString = "INSERT INTO burgers_db (burger_name) VALUES (?)";
    connection.query(queryString, function(err, results){
      if (err) throw err;
      console.log(results);
      cb(result);
  })
  },
  update: function(){
    let queryString = "UPDATE burgers_db SET ? WHERE id = ?";
    connection.query(queryString, function(err, results){
      if (err) throw err;
      console.log(results);
      cb(result);
  })
  },
  delete: function(){
    let queryString = "DELETE FROM burgers WHERE " + condition;
    connection.query(queryString, function(err, results){
      if (err) throw err;
      cb(result);
    })
  }
}

module.exports = orm;
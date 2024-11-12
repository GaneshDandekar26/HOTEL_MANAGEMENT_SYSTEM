const mysql = require('mysql');

const mySqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "immOmi14",
  database: "Hotel_Management"
});

mySqlConnection.connect((err) => {
  if (err) throw err;
  console.log("Database Connected!");
});

module.exports = mySqlConnection;
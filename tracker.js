const mysql = require("mysql");
const dotenv = require("dotenv").config();
const cTable = require("console.table");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.pass,
  database: process.env.dbName
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id" + connection.threadId);
  readData();
});

function readData() {
  console.log("working");
  connection.query("SELECT * FROM employees", function(err, data) {
    if (err) throw err;

    console.table(data);
  });
  connection.end();
}

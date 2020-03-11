const mysql = require("mysql");
const dotenv = require("dotenv").config();
const cTable = require("console.table");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.pass,
  database: process.env.dbName
});

const mainMenu = [
  {
    type: "list",
    message: "Please choose from the following:",
    name: "start",
    choices: [
      "View All Employees",
      //viewAll();
      "View All Employees By Department",
      //viewDep();
      "View All Employees By Manager",
      //viewMan();
      "Add Employee",
      //addEmp();
      "Update Employee Role",
      //updateRole();
      "Update Employee Manager",
      //updateMan();
      "View All Roles",
      //viewRoles();
      "Add a Role",
      //addRole();
      "View All Departments",
      //viewAllDep();
      "Add a Department",
      //addDep();
      "Quit"
      //quit();
    ]
  }
];
function start() {
  inquirer.prompt(mainMenu).then(function(answers) {
    if (answers.start === "View All Employees") {
      viewAll();
    }
    if (answers.start === "View All Employees By Department") {
      viewDep();
    }
    if (answers.start === "View All Employees By Manager") {
      viewMan();
    }
    if (answers.start === "Add Employee") {
      addEmp();
    }
    if (answers.start === "Update Employee Role") {
      updateRole();
    }
    if (answers.start === "Update Employee Manager") {
      updateMan();
    }
    if (answers.start === "View All Roles") {
      viewRoles();
    }
    if (answers.start === "Add a Role") {
      addRole();
    }
    if (answers.start === "View All Departments") {
      viewAllDep();
    }
    if (answers.start === "Add a Department") {
      addDep();
    }
    if (answers.start === "Quit") {
      quit();
    }
  });
}

function viewAll() {
  connection.query("SELECT * FROM employees", function(err, data) {
    if (err) throw err;

    console.table(data);
  });
  start();
}
/////////////////////

function viewDep() {
  console.log("viewDep");
  start();
}
/////////////////////

function viewMan() {
  console.log("viewMan");
  start();
}
/////////////////////

function addEmp() {
  console.log("addEmp");
  start();
}
/////////////////////

function updateRole() {
  console.log("updateRole");
  start();
}
/////////////////////

function updateMan() {
  console.log("updateMan");
  start();
}
/////////////////////

function viewRoles() {
  connection.query("SELECT * FROM role", function(err, data) {
    if (err) throw err;

    console.table(data);
  });
  start();
}
/////////////////////

function addRole() {
  console.log("addRole");
  start();
}
/////////////////////

function viewAllDep() {
  connection.query("SELECT * FROM department", function(err, data) {
    if (err) throw err;
    console.table(data);
  });
  start();
}
/////////////////////

function addDep() {
  console.log("addDep");
  start();
}
/////////////////////

function quit() {
  console.log("No more changes to be made.");
  connection.end();
  return;
}
//
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id" + connection.threadId);
});
start();

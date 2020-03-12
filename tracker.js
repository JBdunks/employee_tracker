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
const deptArr = ["Sales"];
const empArr = ["Sandy Sanders", "Richard Sims"];
const roleArr = ["Sales Person", "Sales Supervisor"];
const mainMenu = [
  {
    type: "list",
    message: "Please choose from the following:",
    name: "start",
    choices: [
      "View All Employees",
      //viewAll();
      "Add Employee",
      //addEmp();
      "Update Employee Role",
      //updateRole();
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

//questions for creating new employee
const newEmployee = [
  {
    type: "input",
    message: "Employee First Name:",
    name: "firstName"
  },
  {
    type: "input",
    message: "Employee Last Name:",
    name: "lastName"
  },
  {
    type: "list",
    message: "Employee Role:",
    name: "roleId",
    choices: roleArr
  }
];

//questions for new role
const newRole = [
  {
    type: "input",
    message: "Enter New Role",
    name: "createdRole"
  },
  {
    type: "input",
    message: "Enter Salary",
    name: "createdSalary"
  }
];

//question for new department
const newDept = [
  {
    type: "input",
    message: "Name of New Department:",
    name: "newDepartment"
  }
];

//question for update role
const changeRole = [
  {
    type: "list",
    message: "Select employee whose role you would like to update:",
    name: "selectedEmp",
    choices: empArr
  },
  {
    type: "list",
    message: "Select New Role:",
    name: "selectedRole",
    choices: roleArr
  }
];

function start() {
  inquirer.prompt(mainMenu).then(function(answers) {
    if (answers.start === "View All Employees") {
      viewAll();
    }
    if (answers.start === "Add Employee") {
      addEmp();
    }
    if (answers.start === "Update Employee Role") {
      updateRole();
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

// function roles() {
//   connection.query("SELECT title FROM role", function(err, res) {
//     if (err) throw err;
//     var roleArr = [];
//     for (let i = 0; i < res.length; i++) {
//       roleArr.push(res[i].name);
//     }
//   });
// }

function addEmp() {
  inquirer.prompt(newEmployee).then(function(answers) {
    var query = connection.query(
      "INSERT INTO employees SET ?",
      {
        first_name: answers.firstName,
        last_name: answers.lastName
      },
      function(err, res) {
        if (err) throw err;
        console.log(
          res.affectedRows +
            "You added" +
            answers.firstName +
            " " +
            answers.lastName
        );
      }
    );
    start();
  });
}

/////////////////////

function updateRole() {
  inquirer.prompt(changeRole).then(function(answers) {
    console.log(answers.selectedEmp + answers.selectedRole);
  });

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
  inquirer.prompt(newRole).then(function(answers) {
    roleArr.push(answers.createdRole);

    var query = connection.query(
      "INSERT INTO role SET ?",
      {
        title: answers.createdRole,
        salary: answers.createdSalary
      },
      function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + "You added: " + answers.createdRole);
      }
    );
    start();
  });
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
  inquirer.prompt(newDept).then(function(answers) {
    deptArr.push(answers.newDepartment);
    var query = connection.query(
      "INSERT INTO department SET ?",
      {
        name: answers.newDepartment
      },
      function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + "You added " + answers.newDepartment);
      }
    );
    start();
  });
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

// function to start
start();

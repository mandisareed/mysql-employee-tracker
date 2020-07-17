// import dependencies (mysql, inquirer, console.table)
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

// create a mysql connection
const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "employee_tracker_db",
});

connection.connect((err) => {
  if (err) {
    console.log("Unable to connect to data source. Good bye.");
  } else {
    console.log("Connection established.")
    mainMenu();
  }
});

//list of constants for the dif main menu action options
const VIEW_DEPARTMENTS = "View all departments";
const VIEW_ROLES = "View all roles";
const VIEW_EMPLOYEES = "View all employees";
const ADD_DEPARTMENT = "Add a department";
const ADD_ROLE = "Add a role";
const ADD_EMPLOYEE = "Add an employee";
const UPDATE_EMPLOYEE_ROLE = "Update an employee's role";

function mainMenu() {
  return inquirer
    .prompt({
      name: "mainAction",
      type: "list",
      message: "Choose a task:",
      choices: [VIEW_DEPARTMENTS, VIEW_ROLES, VIEW_EMPLOYEES, ADD_DEPARTMENT, ADD_ROLE, ADD_EMPLOYEE, UPDATE_EMPLOYEE_ROLE, "EXIT"],
    })
    .then((answer => {
      if (answer.mainAction === VIEW_DEPARTMENTS) {
        return viewDepartments();
      }
      if (answer.mainAction === VIEW_ROLES) {
        return viewRoles();
      }
      connection.end();
    }))
    .catch((error) => {
      console.log(error);
      connection.end();
    });
};

function viewDepartments() {
  const allDepartments = `SELECT * FROM department;`;
  connection.query(allDepartments, (error, deptRows) => {
    if (error) {
      throw error;
    }
    console.table(deptRows);
    mainMenu();
  })
};

function viewRoles() {
  const allRoles = `SELECT * FROM roles;`;
  connection.query(allRoles, (error, roleRows) => {
    if (error) {
      throw error;
    }
    console.table(roleRows);
    mainMenu();
  })
};
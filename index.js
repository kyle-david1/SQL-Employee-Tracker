const inquirer = require('inquirer');
const cTable = require('console.table');
const connection = require('./db/connection');
const TeamDB = require('./db/index.js');
const { addDepartment, addRole } = require('./db/index.js');

const init = () => {
console.log('Welcome to your Employee Tracker');

  start()
 }



const start = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'start',
      message: 'what would you like to do first?',
      choices: [ 'view all departments', new inquirer.Separator(), 'view all roles', new inquirer.Separator(), 'view all employees', new inquirer.Separator(), 'add a department', 'add a role', 'add an employee', 'update an employee role', 'EXIT']
    }
    ])
.then((answer) => {
  switch (answer.start) {
    case "view all departments":
      viewAllDepartments();
      break;

    case "view all roles":
      viewAllRoles();
      break;

    case "view all employees":
      viewAllEmployees();
      break;

    case "add a department":
      addDepartment(); 
      break;
    
    case "add a role":
      addRole();
      break;
    
    case "add employee":
      addEmployee();
      break;

    case "update employee":
      updateEmployee();
      break;

  }
  

})
};



inquirer.prompt([
  {
    type: 'list',
    name: 'second',
    message: 'what would you like to do next?',
    choices: [ 'view all departments', new inquirer.Separator(), 'view all roles', new inquirer.Separator(), 'view all employees', new inquirer.Separator(), 'add a department', 'add a role', 'add an employee', 'update an employee role', 'EXIT']
  },
])
.then((answer) => {
  switch (answer.second) {
    // case "view all departments":
    //   viewAllDepartments();
    //   break;

    case "view all roles":
      viewAllRoles();
      break;

    case "view all employees":
      viewAllEmployees();
      break;

    case "add a department":
      addDepartment(); 
      break;
    
    case "add a role":
      addRole();
      break;
    
    case "add employee":
      addEmployee();
      break;

    case "update employee":
      updateEmployee();
      break;

  }
  });

  

  
    


const viewAllDepartments = () => {
  TeamDB.viewAllDepartments()
  .then(([rows])=>{

    console.table(rows)
  })
}

const viewAllRoles = () => {
  TeamDB.viewAllRoles()
  .then(([rows]) => {
    console.table(rows)
  })
}
// viewAllRoles();

const viewAllEmployees = () => {
  TeamDB.viewAllEmployees()
  .then(([rows]) => {
    console.table(rows)
  })
}
// viewAllEmployees();


















init();
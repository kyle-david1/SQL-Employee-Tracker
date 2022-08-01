const inquirer = require('inquirer');
const cTable = require('console.table');
const connection = require('./db/connection');
const TeamDB = require('./db/index.js');
const { addDepartment, addRole } = require('./db/index.js');

// const init = () => {
// console.log('Welcome to your Employee Tracker');
//  startQuestion()
  
//  }



const startQuestion = () => {
  inquirer.prompt(
  [
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
      addDeptPrompt(); 
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
  

} )};


const viewAllDepartments = () => {
  TeamDB.viewAllDepartments()
  .then(([rows])=>{
    console.table(rows)
    startQuestion();
    
  })
}

const viewAllRoles = () => {
  TeamDB.viewAllRoles()
  .then(([rows]) => {
    console.table(rows)
    startQuestion();
  })
}
// viewAllRoles();

const viewAllEmployees = () => {
  TeamDB.viewAllEmployees()
  .then(([rows]) => {
    console.table(rows)
    startQuestion();
  })
}

// ADD department 
const addDeptQ = 
    [
      {
        type: 'input',
        name: 'newDepartment',
        message: 'what is the name of the department?',
      }
    ]
const addDeptPrompt = () => {
  inquirer.prompt(addDeptQ)
  .then((answer) => {
    TeamDB.addDepartment(answer.newDepartment)
    console.log(`added ${answer.newDepartment} to team database.`)
  })
  .then(() => {
    startQuestion();
  }
  )
}



// const addDepartment = () => {
//   TeamDB.department.addDepartment()
//   .then(([rows]) => {
//     console.table(rows)
//     startQuestion();
//   })

// }



startQuestion();





















// init();
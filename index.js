const inquirer = require('inquirer');
const cTable = require('console.table');
const connection = require('./db/connection');
const TeamDB = require('./db/index.js');
const { addDepartment, addRole, addEmployee } = require('./db/index.js');

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
      addRolePrompt();
      break;
    
    case "add employee":
      addEmployeePrompt();
      break;

    case "update employee":
      updateEmployeePrompt();
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

const addRoleQ = 
    [
      {
        type: 'input',
        name: 'newRole',
        message: 'what is the name, salary and department id of the role youd like to add?',
      }
    ]
    const addRolePrompt = () => {
      inquirer.prompt(addRoleQ)
      .then((answer) => {
        TeamDB.addRole(answer.newRole)
        console.log(`added ${answer.newRole} to team database.`)
      })
      .then(() => {
        startQuestion();
      }
      )
    }

const addEmployeeQ = 
    [
      {
        type: 'input',
        name: 'newEmployee',
        message: 'what is the first name, last name and role id of the employee you would like to add?',
      }
    ]
    const addEmployeePrompt = () => {
      inquirer.prompt(addEmployeeQ)
      .then((answer) => {
        TeamDB.addEmployee(answer.newEmployee)
        console.log(`added ${answer.newEmployee} to team database.`)
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
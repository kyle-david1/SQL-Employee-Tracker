const inquirer = require('inquirer');
const cTable = require('console.table');
const connection = require('./db/connection');
const TeamDB = require('./db/index.js');



const startUpQuestions = [
  {
    type: 'list',
    name: 'options',
    message: 'what would you like to do first?',
    choices: [ 'view all departments', new inquirer.Separator(), 'view all roles', new inquirer.Separator(), 'view all employees', new inquirer.Separator(), 'add a department', 'add a role', 'add and employee', 'update an employee role']

  }
]

const viewAllDepartments = () => {
  TeamDB.viewAllDepartments()
  .then(([rows])=>{

    console.log(rows)
  })
}

const start = () => {
  // inquirer.prompt(startUpQuestions)
  viewAllDepartments();
}
start();

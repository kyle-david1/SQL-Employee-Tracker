const connection = require('./connection');

class TeamDB {
  constructor (connection){
    this.connection = connection; 
  }
  viewAllDepartments() {
    return this.connection.promise().query(
      "SELECT * FROM DEPARTMENT"
    )

  }
  viewAllRoles() {
  return this.connection.promise().query(
    "SELECT roles.id, roles.title, department.department_name, roles.salary FROM roles INNER JOIN department ON roles.department_id=department.id"
    )
  }

  viewAllEmployees() {
  return this.connection.promise().query(
    "SELECT employee.id, employee.first_name, employee.last_name, roles.title, department.department_name AS department, roles.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN roles on employee.role_id = roles.id LEFT JOIN department on roles.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id"
    )
  }
  


  addDepartment(input) {
    return this.connection.promise().query(
      "INSERT INTO department (department_name) VALUES (?)", input
    )
  }

  addRole(input) {
    return this.connection.promise().query(
      "INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)", input
    )
  }

  addEmployee(input) {
    return this.connection.promise().query(
      "INSERT INTO employee (first_name,last_name, role_id) VALUES (?, ?, ?)", input
    )
  }

  // updateEmployee(input) {
  //   return this.connection.promise().query(
  //     "UPDATE employee SET (?) WHERE (first_name, last_name)", input
  //   )
  // }









};


module.exports = new TeamDB(connection);
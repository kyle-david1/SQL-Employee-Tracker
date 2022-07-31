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
    "SELECT * FROM ROLES"
  )

}

  viewAllEmployees() {
  return this.connection.promise().query(
    "SELECT * FROM EMPLOYEE"
  )

}

  addDepartment() {
    return this.connection.promise().query(
      "INSERT INTO DEPARTMENT (department_name) VALUES (?)"
    )
  }

  addRole() {
    return this.connection.promise().query(
      "INSERT INTO ROLES (title) VALUES (?)"
    )
  }

  addEmployee() {
    return this.connection.promise().query(
      "INSERT INTO EMPLOYEE (first_name)(last_name)(role_id)"
    )
  }

  updateEmployee() {
    return this.connection.promise().query(
      "SELECT * FROM EMPLOYEE"
    )
  }









}


module.exports = new TeamDB(connection);
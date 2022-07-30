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
  viewAllRoles







}


module.exports = new TeamDB(connection);
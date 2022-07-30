DROP DATABASE IF EXISTS team_db;
CREATE DATABASE team_db; 

USE team_db;

-- table for department
CREATE TABLE department (
  id INT AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL
);

-- table for role
CREATE TABLE roles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL, 
  department_id INT NOT NULL,
  INDEX dep_ind (department_id),
  CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE 
)

-- table for employee
CREATE TABLE employee (
  id INT AUTO_INCREMENT PRIMARY KEY
  first_name VARCHAR(30)
  last_name VARCHAR(50)
  role_id INT NOT NULL
  INDEX role_ind (role_id),
  CONSTRAINT fk_roles FOREIGN KEY (role_id) REFERENCES
  role(id) ON DELETE CASCADE
  manager_id INT NULL
)
INSERT INTO department (department_name)
VALUES  ("Human Resources"), 
        ("IT"), 
        ("Finance"),
        ("Marketing"), 
        ("Research and Development"), 
        ("Production");

INSERT INTO roles (title, salary, department_id)
VALUES  ("HR specialist", 60000, 1),
        ("Server Engineer", 70000, 2),
        ("Accountant", 80000, 3),
        ("Project Manager", 60000, 4),
        ("Product Developer", 50000, 5), 
        ("Production Designer", 90000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Sue", "Karen", 1, NULL),
        ("Jim", "Roberts", 2, NULL),
        ("Kyle", "Baca", 3, NULL),
        ("Zachary", "Coleman", 4, NULL),
        ("Trevor", "Noah", 5, NULL),
        ("Kim", "Bardashian", 6, NULL);
      


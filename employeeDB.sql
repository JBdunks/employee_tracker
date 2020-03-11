DROP DATABASE IF EXISTS employeesDB;
CREATE  DATABASE  employeesDB;

USE employeesDB;

CREATE TABLE employees(
id INT AUTO_INCREMENT NOT NULL,
first_name VARCHAR(80) NOT NULL,
last_name VARCHAR(80) NOT NULL,
role_id INT NOT NULL,
manager_id INT,
PRIMARY KEY (id)
);

CREATE TABLE role(
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary INT NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE department(
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO employees(first_name,last_name, role_id, manager_id)
VALUES("Sandy","Sanders",1, 10 );
INSERT INTO employees(first_name,last_name, role_id, manager_id)
VALUES("Richard", "Sims", 2, 10);

INSERT INTO role(title, salary, department_id)
VALUES ("Sales Person", 75000, 1);
INSERT INTO role(title, salary, department_id)
VALUES("Sales Supervisor", 85000,1);

INSERT INTO department(name)
VALUES("Sales");

INSERT INTO department(name)
VALUES("Research");
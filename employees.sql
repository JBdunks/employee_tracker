DROP DATABASE IF EXISTS employees_db;
CREATE  DATABASE  employees_db;

USE employees_db;

CREATE TABLE employees(
id INT AUTO_INCREMENT NOT NULL,
first_name VARCHAR(80) NOT NULL,
last_name VARCHAR(80) NOT NULL,
title VARCHAR(20)NOT NULL,
department VARCHAR(30) NOT NULL,
salary INT(10) NOT NULL,
manager VARCHAR(99),
PRIMARY KEY (id)
);
INSERT INTO employees(first_name,last_name, title, department, salary, manager)
VALUES("Sandy","Sanders", "Salesperson", "Sales", 65000,"Richard Sims");

INSERT INTO employees(first_name,last_name, title, department, salary, manager)
VALUES("Jeff","VanGundy", "Sales Manager", "Sales", 85000, "Richard Sims");

INSERT INTO employees(first_name,last_name, title, department, salary, manager)
VALUES("Nate", "Morton","Janitor","EVS",36000, "David Sutton");

INSERT INTO employees(first_name,last_name, title, department, salary, manager)
 VALUES("Mellisa", "Brancato", "Salesperson", "Sales", 70000, "Richard Sims");
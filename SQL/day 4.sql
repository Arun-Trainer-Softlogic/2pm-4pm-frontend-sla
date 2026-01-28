-- CREATE DATABASE 2pmclass_db;
-- USE 2pmclass_db;


-- create table departments (
-- dept_id int primary key auto_increment,
-- dept_name varchar(50) unique not null ,
-- location varchar(50)
-- );


-- CREATE TABLE employees (
--     emp_id INT PRIMARY KEY AUTO_INCREMENT,
--     emp_name VARCHAR(50) NOT NULL,
--     email VARCHAR(100) UNIQUE,
--     phone VARCHAR(15),
--     salary DECIMAL(10,2) CHECK (salary > 0),
--     hire_date DATE,
--     dept_id INT,
--     status ENUM('active','inactive') DEFAULT 'active',
--     FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
-- );




-- INSERT INTO departments (dept_name, location) VALUES
-- ('HR','Chennai'),
-- ('IT','Bangalore'),
-- ('Finance','Mumbai'),
-- ('Sales','Delhi');


-- INSERT INTO employees (emp_name, email, phone, salary, hire_date, dept_id)
-- VALUES
-- ('Arun','arun@company.com','9876543210',30000,'2022-01-10',2),
-- ('Priya','priya@company.com','9876543211',28000,'2021-03-15',1),
-- ('Rahul','rahul@company.com','9876543212',45000,'2020-07-20',2),
-- ('Sneha','sneha@company.com','9876543213',32000,'2022-11-01',3);



-- INSERT INTO employees (emp_name, email, phone, salary, hire_date, dept_id)
-- VALUES
-- ('run','arun@coany.com','9876543210',30500,'2022-01-10',5)




-- select e.emp_name , d.dept_name 
-- from employees e 
-- inner join departments d 
-- on e.dept_id = d.dept_id










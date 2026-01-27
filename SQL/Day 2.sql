-- create table employees (
-- emp_id int primary key auto_increment,
-- emp_name varchar(50) not null ,
-- department varchar(50 ) not null ,
-- salary decimal (10,2) check(salary > 0),
-- email varchar(100) unique,
-- hire_date date ,
-- status varchar(20) default "active"
-- )
-- insert into employees (emp_name , department , salary , email , hire_date , status) 
-- values 
-- ('arun', 'IT' , 4000000 , "ar$gmail.com" , '2022-01-10' , 'active'),
-- ('Priya',   'HR',        28000.00, 'priya@company.com',   '2021-03-15', 'active'),
-- ('Rahul',   'Finance',   45000.00, 'rahul@company.com',   '2020-07-20', 'inactive'),
-- ('Sneha',   'IT',        32000.00, 'sneha@company.com',   '2022-11-01', 'active'),
-- ('Karthik', 'Admin',    50000.00, 'karthik@company.com', '2019-05-25', 'active'),
-- ('Anjali',  'HR',        26000.00, 'anjali@company.com',  '2023-02-10', 'active'),
-- ('Vijay',   'Finance',   38000.00, 'vijay@company.com',   '2021-08-18', 'active');



-- select * from employees 
-- where department = "IT"


-- select * from employees ;
-- select department , avg(salary) as avg_salary 
-- from employees 
-- group by department 



-- select emp_name , salary 
-- from employees 
-- order by salary desc
-- limit 3

-- SELECT * FROM employees
-- WHERE status = 'inactive';

-- select emp_name , hire_date 
-- from employees 
-- where hire_date > "2022-01-01"

-- select * from employees
-- where department = "Admin"
-- select emp_name , salary 
-- from employees 
-- where salary < 35000


-- select * from employees
--  where department = "IT" or department  = "admin"


-- select * from employees
--  where not status = "inactive"


-- select emp_name , salary , department
-- from employees 
-- where salary between 30000 and 45000

-- SELECT * FROM employees
-- WHERE department IN ('IT', 'HR');
-- 
-- SELECT * FROM employees
-- WHERE email LIKE '%@company.com';

-- select distinct department from employees ;


-- select distinct department 
-- from employees 
-- where status = "ACTIVE"


-- select emp_name , department , salary 
-- from employees 
-- where department = "IT"
-- and salary > 35000
-- and status = "active"

-- select department , avg(salary)as avg_salary 
-- from  employees 
-- where status = 'active'
-- group by department;

-- SELECT department, AVG(salary) as avg_salary
-- FROM employees
-- GROUP BY department
-- having avg(salary) < 30000;



-- select count(*) as total_employees 
-- from employees ;

-- select count(*) as active_employees 
-- from employees
-- where status = "inactive"

-- SELECT SUM(salary) AS total_salary
-- FROM employees;













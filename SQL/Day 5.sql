-- | emp_id | project_id | emp_name | project_name |
-- | ------ | ---------- | -------- | ------------ |
-- | 1      | 101        | Arun     | HR System    |
-- | 1      | 102        | Arun     | Payroll      |
-- | 2      | 101        | Priya    | HR System    |

-- employees 


-- | emp_id | emp_name |
-- | ------ | -------- |
-- | 1      | Arun     |
-- | 2      | Priya    |

-- -- Projects 
-- | project_id | project_name |
-- | ---------- | ------------ |
-- | 101        | HR System    |
-- | 102        | Payroll      |


-- -- employees_projects 

-- | emp_id | project_id |
-- | ------ | ---------- |
-- | 1      | 101        |
-- | 1      | 102        |
-- | 2      | 101        |


-- non-key colm shoiuld not depend on another non key_colmn 

-- | emp_id | emp_name | dept_id | dept_name |
-- | ------ | -------- | ------- | --------- |
-- | 1      | Arun     | 10      | HR        |
-- | 2      | Priya    | 20      | IT        |


-- | emp_id | emp_name | dept_id |
-- | ------ | -------- | ------- |
-- | 1      | Arun     | 10      |
-- | 2      | Priya    | 20      |


-- | dept_id | dept_name |
-- | ------- | --------- |
-- | 10      | HR        |
-- | 20      | IT        |


-- 1NF: No multi-valued attributes

-- 2NF: No partial dependency on composite key

-- 3NF: No non-key → non-key dependency




-- subquery 
use 2pmclass_db; 


-- select emp_name , salary 
-- from employees 
-- where salary > (
-- select avg(salary)
-- from employees 
-- );


-- SELECT emp_name
-- FROM employees
-- WHERE salary = (
--     SELECT MAX(salary)
--     FROM employees
-- );


-- select emp_name 
-- from employees 
-- where dept_id in (
-- select dept_id  
-- from departments 
-- where location = 'chennai')


-- select emp_name , salary 
-- from employees e 
-- where salary > 
-- (
-- select avg(salary)
-- from  employees 
-- where dept_id = e.dept_id
-- )
-- correlated 
--  

-- SELECT e.emp_name, e.salary
-- FROM employees e
-- JOIN (
--     SELECT dept_id, AVG(salary) avg_sal
--     FROM employees
--     GROUP BY dept_id
-- ) d
-- ON e.dept_id = d.dept_id
-- WHERE e.salary > d.avg_sal;


-- SELECT emp_name
-- FROM employees
-- WHERE salary > (
--   SELECT AVG(salary) FROM employees
-- );


-- select emp_name , salary 
-- from employees 
-- where salary > (select avg(salary) from employees )

-- select emp_name ,salary
-- from employees e
-- where salary > (
-- select avg(salary)
-- from employees 
-- where dept_id = e.dept_id
-- )








 








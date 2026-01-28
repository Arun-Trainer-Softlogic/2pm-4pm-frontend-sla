-- use 2pmbatch;

-- select count(*) as Total_employees 
-- from employees 

-- select sum(salary) as Total_sala 
-- from employees 

-- select department , sum(salary) as dept_tot_sala
-- from employees 
-- group by department;


-- select min(salary )as min_slary,
-- max(salary) as max_sakar
-- from employees;


-- SELECT department, MAX(salary) AS highest_salary
-- FROM employees
-- GROUP BY department;


-- select department , count(*) as emp_count
-- from employees 
-- group by department;


-- select department , count(*) as emp_count
-- from employees 
-- group by department 
-- having count(*) > 2;



-- select * from employees 
-- order by salary desc;


-- select * from employees 
-- order by department asc , salary desc ;

-- SELECT department, AVG(salary) AS avg_salary
-- FROM employees
-- GROUP BY department
-- ORDER BY avg_salary DESC;

-- SELECT emp_name, salary
-- FROM employees
-- ORDER BY salary asc
-- LIMIT 2;

-- SELECT department, AVG(salary) AS avg_salary
-- FROM employees
-- WHERE status = 'inactive'
-- GROUP BY department
-- ORDER BY avg_salary DESC
-- LIMIT 3;























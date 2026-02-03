
-- use 2pmclass_db;

-- SELECT emp_name, dept_id, salary,
-- ROW_NUMBER() OVER (ORDER BY salary DESC) AS rank_in
-- FROM employees;

-- select emp_name ,dept_id , salary ,
-- row_number() over (partition by dept_id order by salary desc )as dept_rank
-- from employees ;


-- select emp_name , salary ,
-- rank() over (order by salary desc ) as rank_salary 
-- from employees ;

-- SELECT emp_name, salary,
-- DENSE_RANK() OVER (ORDER BY salary DESC) AS dense_rank_salary
-- FROM employees;


-- select emp_name , dept_id , salary , 
-- avg(salary) over (partition by dept_id) as avg_dept_salary 
-- from employees ;




-- SELECT emp_name, hire_date, salary,
-- SUM(salary) OVER (ORDER BY hire_date) AS running_total
-- FROM employees;


-- with avg_salary as (
-- select avg(salary) as avg_salaaa
-- from employees 
-- )
-- select emp_name , salary 
-- from employees 
-- where salary > (select avg_salaaa from avg_salary)


-- WITH ranked_emps AS (
--     SELECT emp_name, dept_id, salary,
--     ROW_NUMBER() OVER (PARTITION BY dept_id ORDER BY salary DESC) AS rn
--     FROM employees
-- )
-- SELECT emp_name, dept_id, salary
-- FROM ranked_emps
-- WHERE rn <= 2;


-- with dept_avg as (
-- select dept_id , avg(salary) as avg_salary -- avg salry 
-- from employees 
-- group by dept_id  -- group emp by dept 
-- ),
-- high_paid as (
-- select e.emp_name , e.salary , d.avg_salary 
-- from employees e
-- join dept_avg d on e.dept_id = d.dept_id
-- where e.salary > d.avg_salary
-- )
-- select * from high_Paid














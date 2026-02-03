 use 2pmclass_db

-- create view active_employees as 
-- select emp_id , emp_name , dept_id 

-- from employees 
-- where status = "active"




-- select * from active_employees


-- CREATE VIEW dept_salary_summary AS
-- SELECT dept_id, AVG(salary) AS avg_salary
-- FROM employees
-- GROUP BY dept_id;


-- update active_employees 
-- set dept_id = 5
-- where emp_id = 3;

-- drop view active_employees 



-- DELIMITER $$
-- CREATE PROCEDURE get_all_employees()
-- begin 
-- select * from employees ;
-- end $$ 
--  DELIMITER ;

-- call get_all_employees();


-- DELIMITER $$

-- CREATE PROCEDURE get_emp_by_dept(IN dept INT)
-- BEGIN
--     SELECT emp_id, emp_name, salary 
--     FROM employees
--     WHERE dept_id = dept;
-- END $$

-- DELIMITER ;


-- call get_emp_by_dept(3);



-- DELIMITER $$
-- CREATE PROCEDURE get_emp_count(OUT total INT)
-- BEGIN
--     SELECT COUNT(*) INTO total
--     FROM employees;
-- END $$
-- DELIMITER ;


-- call get_emp_count(@total);
-- select @total;

-- DELIMITER $$
-- create procedure emp_count_by_dept(in dept INT,out total int )
-- Begin 
-- select count(*) into total 
-- from employees 
-- where dept_id = dept ;
--  End $$
-- DELIMITER ;


-- call emp_count_by_dept(5, @totals) ;
-- select @totals; 

-- DELIMITER $$
-- create procedure check_salary(in sal INT)
-- Begin 
-- if sal >= 50000 then 
-- select "high Salary";
-- else 
-- select "Normal salary";
-- end if ;
-- END $$
-- DELIMITER ;





-- DELIMITER  $$
-- create Procedure hire_salary (
-- in dept int,
-- in hike int 
-- )
-- BEGIN 
-- update employees 
-- set salary = salary + hike 
-- where dept_id = dept ;
-- END $$
-- DELIMITER ;

-- call hire_salary(4, 10000);



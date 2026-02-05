-- use 2pmclass_db


-- Delimiter $$

-- create trigger trigger_name 
-- before insert on table_name 
-- for each row 
-- begin
-- -- logiccc 
-- end $$ 
-- Delimiter ;



-- Delimiter $$ 
-- create trigger before_salaryt_insert
-- before insert on employees 
-- for each row 
-- begin 
-- if new.salary <= 0 then
-- set new.salary = 600 ;
-- end if ;
-- END $$
-- Delimiter ;


-- INSERT INTO employees (emp_name, email, phone, salary, hire_date, dept_id)
-- VALUES
-- ('krun','krun@coany.com','9876543210',0,'2022-01-10',5)




-- create table employee_audit(
-- emp_id int ,
-- action varchar(20),
-- action_time Datetime
-- )



-- Delimiter $$ 
-- create trigger after_employee_insert 
-- after insert on employees 
-- for each row
-- begin 
-- insert into employee_audit
-- values 
-- (new.emp_id , 'insert' , now());
-- end $$
-- Delimiter ;


-- INSERT INTO employees (emp_name, email, phone, salary, hire_date, dept_id)
-- VALUES
-- ('sivsanya','san@coany.com','9876543210',500,'2022-01-10',5)


--  show triggers ;



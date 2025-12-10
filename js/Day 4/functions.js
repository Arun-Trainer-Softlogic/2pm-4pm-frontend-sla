// function can run only ween called 
// can be defined anywhere in script 
// good for resusblity



// when used 

// button 
// calculations 
// validations
// repeat a task




// functioon expression 
// function stored in a variable is called as function expression   



// function greet() {
//   console.log("Hello World");
// }


// var show = function (){
//     console.log("Function expression");
// }




// not hoisted like the function declaration 
// common for callbacks in advance js 



// function greet (name){
//     console.log("Hello " + name );
    
// }


// greet("Arun")



// function add (a,b){
//     return a + b
    
// }

//  let ar = (add(10,70));

 
// function welcome (name = "people"){
//     console.log("Hello " + name ); 
// }

// welcome(null);



// arrow function 


// const greet = (a , b ) => a + b

// // no function keyword 
// // automatically returns for single-line expressionn
// // does not have its own (this) will not work  important in es6


// event handling
// async programing
// timers 
// arrray methord 
// key pooints 
// js treats function as first class citizens 
// function can be stores , passed , returned 





// call back 




// function greet (name, callback){
//     console.log(`Hello , ${name}!`);
//     callback();

// }
// function sayGoodbye(){
//     console.log("Goodbye");
    

// }

// greet("Love", sayGoodbye)



// function dellay(){
//     console.log("delayed message from blade ");
    
// }
// setInterval(dellay , 000)


// iife





// function tets(){
//     let x = 10;
// }

// console.log(x);





// hello ()
// function hello() {
//     console.log("hi");
    
// }

// hello()

// var hello = () => {}

// function higher(fn){
//     fn()
// }



// function sayHello() {
//   console.log("Hello Students!");
// }
// sayHello();




// function multiply(a, b) {
//   return a * b;
// }
// console.log(multiply(4, 5));

// const square = n => n * n;
// console.log(square(6));


// setTimeout(() => {
//   console.log("Timer done!");
// }, 2000);


// IIfE

(() => {
    console.log("i am the boss ");
    
})();
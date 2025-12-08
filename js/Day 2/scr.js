// old wa of declaring a variable
// function scope 


// var name = "John Doe";
// console.log(name);




// var ram = "John Doe";
//  // redeclaring the variable

//  console.log(ram);
 

//  var ram = "lajitha"

//  console.log(2 + ram);
 

//  // reassigning the variable
//  ram = "Jane Doe";


//     console.log(3 + ram);




// let 

// block scope
// {
//  let ar = "Hello World";
//  console.log(ar);
// }

// let ar = "Hello Again";
// console.log(ar);

// reassigning the variable


// let ar = "Hello Again";


// ar = "Hello John";
// console.log(ar);


// most commonly used way to declare a variable



// const 
// block scope
// cannot be reassigned 
// must be initialized at the time of declaration





//  // number 


//  let age = 25;
//  let price = 19.99;



//  // string 


//  let name = "John Doe";


//  // boolean

//     let isStudent = true;
//     let isLoggedIn = false;

// // null 
//     let data = null;
//     console.log(data);

// // undefined


//     let result;
//     console.log(result);

// // symbol
//     let id = Symbol("12345");
//     let id2 = Symbol("12345");


//     console.log(id === id2); // false

//  // bigint


//     let bigNumber = 90071992547419912345678n;
//     let a = 1n;


//     console.log(bigNumber + a);
    

// object 




// console.log(user.name);
// console.log(user.age);


// array 

// let colors = ["red", "green", "blue", , 123, true,   null, undefined, {name: "test"}];
// console.log( typeof colors);

// function greet(a, b) {
//    return (a+b)
// }

// console.log(greet(10,40));


// let user = {
//     name : "John Doe",
//     age : 30,
//     isAdmin : true,
//     greet : function () {
//         console.log("Hello, " + this.name);
//     }
// }

// user.greet()


// opertors

// arithmetic operators

// console.log("Addition: " + (a + b));
// console.log("Subtraction: " + (a - b));
// console.log("Multiplication: " + (a * b));
// console.log("Division: " + (a / b));
// console.log("Modulus: " + (a % b));
// console.log("Exponentiation: " + (a ** b));
// console.log("Increment: " + (a++));
// console.log("Decrement: " + (--b));

// assignment operators
// let a = 10;
// let b = 45;
// let c = 45;

// console.log(c === b );

// console.log(a != b );

// console.log(a !== b );

// console.log(a > b );

// console.log(a < b );

// console.log(a >= b );

// console.log(a <= b );


let a = 10;
let b = 45;
let c = 45;

// logical operators

// && (AND)
console.log( (a < b) && (c === b) ); // true


// || (OR)     

console.log( (a > b) || (c === b) ); // true

// ! (NOT)

console.log( !(a > b) ); // true


// bitwisee operators

console.log( a & b ); // AND
console.log( a | b ); // OR
console.log( a ^ b ); // XOR
console.log( ~a );    // NOT
console.log( a << 2 ); // Left Shift
console.log( a >> 2 ); // Right Shift
console.log( a >>> 2 ); // Zero-fill Right Shift





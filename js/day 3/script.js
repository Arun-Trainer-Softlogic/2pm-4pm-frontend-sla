// conditions in   JavaScript

// if (condition){
//     // code block
// }

// let age = 20;

// if (age >= 18) {
//     console.log("You are an adult.");
// }
//checks oly one condition
// runs only when condition is true

// if...else statement
// runs one block if ture , another if false

// let marks = 20;

// if (marks >= 35) {
//     console.log("Pass");
// }else {
//     console.log("fail");

// }

// when used : when there ARE EXCTLY 2 CHECKS

// ELSE-IF

// Definition :  used when multiple condition needs checking \
// let score = 56;

// if(score >= 90){
//     console.log("A+");
// }else if (score >= 80){
//     console.log("A");
// } else if (score >= 70){
//     console.log("B");
// } else if (score >= 60){
//     console.log("C");
// } else if (score >= 50){
//     console.log("D");
// } else {
//     console.log("F");
// }

// when used : when there ARE MORE THAN 2 CHECKS

// Switch

// Good for  fixed options

// switch (15 >= 15) {
//     case true:
//         console.log("br");
//         break;

//     default:
//         console.log("always false");

//         break;
// }

// false , 0 , "" , null, undefined, nan ,

// loops

// allows repeating code multiple time to repeat

// for (inizilization ; codition ; increment){
//     // code block
// }

// for (let a = 1 ;  a < 10 ; a++ ){
//     console.log(a);

// }

// key
// 1. has counter
// 2. runs in sequence
// 3. controls start , end and steps

// while loop

// let i = 1 ;
// while (i <= 5){
//     console.log(i);
//     i++
// }

// for_of

// const numbers = [1,2,3,4,[55,66,[70000,1234,65, [666606666],43],88, [999,888,777,666 ,[6.8]]],6]

// console.log(numbers[4][4][0]);

// const fruits = "wetermelonss"

// for (let aer of fruits){
//     console.log(aer);

// }

// for_in

// const user = {
//   name: "vasinathan",
//   age: 60,
//   wife: "yes",
// };

// for (let key in user) {
//   console.log( user[key], key );
// }



// for (let i = 1 ; i <= 10 ; i++ ){
//     if (i === 5) break;
//     console.log(i);
    
// }

// for (let i = 1 ; i <= 10 ; i++ ){
//     if (i === 5) continue;
//     console.log(i);
    
// }



// for of  // array , string 
// for in // onject 


// | Concept  | Description                | Example            |
// | -------- | -------------------------- | ------------------ |
// | if-else  | Basic conditional logic    | `if(x>10){}`       |
// | switch   | Multi-choice logic         | `switch(day)`      |
// | for      | Loop with counter          | `for(i=0;i<5;i++)` |
// | while    | Loop until condition fails | `while(x<5)`       |
// | do…while | Runs at least once         | `do{}while()`      |
// | for…of   | Loop array values          | `for(x of arr)`    |
// | for…in   | Loop object keys           | `for(k in obj)`    |
// | break    | Stops loop                 | `break`            |
// | continue | Skips iteration            | `continue`         |


// let x  = 9 ;

// do{
//     console.log(x);
// }while (x  10)



let a = 45 ;

let b = 90;

let c= a + b 

console.log(`the toTAL  is ${c} and the vale of a  is ${a} and the vale of b is ${b}`);


// Students often confuse for…of vs for…in → explain clearly.

// Show how forgetting i++ in loops causes infinite loops.

// Demonstrate browser console step-by-step execution.

// Encourage drawing flowcharts for conditions & loops.

// Conditions + loops form the logic layer of all future JS topics.
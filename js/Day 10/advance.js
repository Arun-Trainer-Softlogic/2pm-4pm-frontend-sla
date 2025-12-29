// let x = 10;

// function show() {
//   console.log(x);
// }

// show();
// function test(){
//     let a = 90
//     console.log(a);
// }
// test()

// Block Scope

// if (true ){
//     let b = 20
// }

// console.log(b);

// {
//     let aa = 90
//     console.log(aa);

// }

// closer is created when a function remembers variable form its outer scope even
// after the outer function has finished running

// function outer() {
//   let count = 0;

//   function inner() {
//     count++;
//     console.log(count);
//   }

//   return inner;
// }

// const counter = outer();

// counter()

// console.log("start");

// for (let i = 0; i< 1e3 ; i++){
//     console.log(i);

// }

// console.log("End");

// function asyloop(i) {
//   if (i < 1e3) {
//     console.log(i);
//     setTimeout(() => asyloop(i + 1), 0);
//   } else {
//     console.log("End");
//   }
// }

// console.log("start");
// // asyloop(0)

// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function runAsyncLoop() {
//   console.log("start");

//   for (let i = 0; i < 1e3; i++) {
//     console.log(i);

//     if (i % 100 === 0) {
//       await delay(8000);
//     }
//   }

//   console.log("End");
// }

// runAsyncLoop();

// console.log("start");

// setTimeout(() => {
//     console.log("Async task Done ");
// }, 0)

// console.log("End");

// function fetchData(callback){
//     setTimeout(()=> {
//         callback("data Loaded")
//     }, 2000)
// }

// fetchData ((result)=> {
//     console.log(result);

//

// const promise = new Promise((resolve , reject)=> {
//     let ar = false ;

//     setTimeout(()=> {
//         if(ar){
//             resolve("Success : The condition was met !")
//         }else{
//             reject("Error : the Condition was not met !")
//         }
//     }, 2000)
// })
// promise
// .then(result => console.log(result))
// .catch(error => console.log(error))

// function fetchData(){
//     return new Promise (resolve => {
//         setTimeout(() => resolve (" Data recived "), 1000)
//     })

// }

// async function loadData() {
//     const result = await fetchData()
//     console.log(result);
// }

// loadData();

// async function getUsers() {
//     const response = await fetch("https://api.github.com/users/arun-cloud-dev/followers")
//     const users = await response.json();
//     console.log(users);
// }

// getUsers()

// let a = 90;
// let b = 78;

// let ab = a+b ;
// console.log(`the value of a is ${a} and the value of b is ${b} so total is ${ab}`);

// let arr1 = [1,2,3,4]
// const arr2 = [...arr1,5,6,7]

// console.log(arr2);


function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3)+sum(10, 20, 30) )



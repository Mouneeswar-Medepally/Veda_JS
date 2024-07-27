/*
A function is a block of code designed to perform a particular task.
A function is executed when "something" invokes it (calls it).


functions can be defined in two primary ways: 
1)function declarations
2)function expressions. 


A function declaration defines a function with the specified parameters. 
It has the following syntax:
function name(parameter1,parameter2,...){
 ...code
 }
function multiply(value){
for(let i=1;i<=10;i++){
console.log(value*i)
}
}

multiply(2)
multiple(3)



Characteristics of Function Declarations:

Hoisting: Function declarations are hoisted to the top of their containing scope. 
This means that the function can be called before it is defined in the code.

Naming: Function declarations must have a name. 
This name is used within the scope where the function is defined.

Scope: The function name is bound within the scope in which it is declared. 
The function itself can be accessed anywhere in the scope after its declaration.

parameters are variables that are specific to the function



Function Expressions
A function expression defines a function as part of a larger expression syntax.
It can be anonymous or named. 

The syntax for a function expression is:
const variableName = function (parameters) {
  // function body
};

Characteristics of Function Expressions:
Not Hoisted: Function expressions are not hoisted, 
meaning they cannot be used before they are defined.

Anonymous and Named: Function expressions can be anonymous (no name) or named. 
Named function expressions are useful for recursion or for better debugging with stack traces.

Scope: The name of a named function expression is local to the function's body.



Arrow Functions:
Arrow functions, introduced in ES6, 
provide a concise syntax for writing function expressions. 
They do not have their own this context.
const add = (a, b) => a + b;
const add = a=>a+1;
const add = _ =>a+1;
const add = ()=>a+1;
const add =()=>{
  ...code;
  return ...
  }

Immediately Invoked Function Expressions (IIFE):
An IIFE is a function that is defined and immediately called. 
It is useful for creating a local scope to avoid polluting the global namespace.
(function() {
  console.log('This is an IIFE');
})();

Callbacks:

A callback is a function that is passed as an argument to another function and is executed after some operation has been completed. 
Callbacks are a way to ensure that certain code doesn’t execute until other code has already finished execution.

function doSomething(callback) {
  console.log('Doing something...');
  callback(); // Execute the callback function after doing something
}

function myCallback() {
  console.log('Callback function executed!');
}

doSomething(myCallback);

Examples used: 

// multiply(2)
// console.log(i)
// console.log(j)
// let i=0;
// var j=0;
// var j;
// j=0;

// function multiply(value) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(value * i)
//     }
// }


// const multiply = function mul(value) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(value * i)
//     }
//     return "Execution completed"
// };
// const returnedValue=multiply(2)
// console.log(returnedValue)

// const add = (a, b) => {
//     //...code
//     return a+b
// };
// console.log(add(1,2))

// (function() {
//     console.log('This is an IIFE');
//   })();

//default values to parameters
// function multiply(value=1) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(value * i)
//     }
// }
// multiply()

//callbacks
//callback hell
// function execute(a,b,func){
//     return func(a,b)
// }
// function add(a,b){
//     return a+b;
// }
// function subtract(a,b){
//     return a-b;
// }
// const addition=execute(1,2,add);
// const subtraction=execute(1,2,subtract)
// console.log(addition,subtraction)

*/

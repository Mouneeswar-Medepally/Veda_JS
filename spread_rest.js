/*

Destructuring:
Destructuring is a convenient way of extracting values from arrays or objects into distinct variables. 
This feature allows for more concise and readable code.

Array Destructuring
Array destructuring allows you to unpack values from arrays into individual variables.
const [a, b] = [1, 2];
console.log(a); // Output: 1
console.log(b); // Output: 2

You can skip elements in the array by leaving the corresponding position empty.
const [first, , third] = [1, 2, 3];
console.log(first); // Output: 1
console.log(third); // Output: 3

Default Values
You can assign default values in case the array doesn’t have enough elements.
const [a = 1, b = 2, c = 3] = [10];
console.log(a); // Output: 10
console.log(b); // Output: 2
console.log(c); // Output: 3

Swapping Variables
Destructuring makes it easy to swap variable values without needing a temporary variable.
let x = 1;
let y = 2;
[x, y] = [y, x];
console.log(x); // Output: 2
console.log(y); // Output: 1

const arr=[{name:'cams'},2];
const [{name},value]=arr;
console.log(name)

Object Destructuring
Object destructuring allows you to unpack properties from objects into distinct variables.

const person = { name: 'Alice', age: 25 };
const { name, age } = person;
console.log(name); // Output: Alice
console.log(age); // Output: 25

Renaming Variables
You can assign new variable names to properties during destructuring.

const person = { name: 'Alice', age: 25 };
const { name: personName, age: personAge } = person;
console.log(personName); // Output: Alice
console.log(personAge); // Output: 25

Default Values
You can assign default values if the property does not exist.

const person = { name: 'Alice' };
const { name, age = 30 } = person;
console.log(name); // Output: Alice
console.log(age); // Output: 30

Nested Objects
You can destructure nested objects.

const person = { name: 'Alice', address: { city: 'Wonderland', zip: '12345' } };
const { name, address: { city, zip } } = person;
console.log(name); // Output: Alice
console.log(city); // Output: Wonderland
console.log(zip); // Output: 12345


Spread Operator (...)
The spread operator allows an iterable (like an array or a string) to be expanded in places where zero or more arguments or elements are expected. 
It can also be used to spread the properties of an object.

1)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

2)Spreading Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObject = { ...obj1, ...obj2 };
console.log(combinedObject); // Output: { a: 1, b: 2, c: 3, d: 4 }

3)Copying arrays:
const arr = [1, 2, 3];
const arrCopy = [...arr];
console.log(arrCopy); // Output: [1, 2, 3]

4)Copying Objects
const obj = { a: 1, b: 2 };
const objCopy = { ...obj };
console.log(objCopy); // Output: { a: 1, b: 2 }

5)Function Arguments
function sum(...rest) {
  return rest;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // Output: [1,2,3]



The rest operator allows us to represent an indefinite number of arguments as an array. 
It collects all remaining elements into an array.

1)Function Parameters
function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10

2)Destructuring arrays:
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]

3)Destructuring Objects:
const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(rest); // Output: { c: 3, d: 4 }

Key Differences

Spread:
Used to expand elements.
Commonly used in array and object literals and in function calls.
Syntax: ...iterable
Rest:

Used to collect multiple elements into an array.
Commonly used in function parameters and destructuring assignments.
Syntax: ...identifier


Examples used:

const arr=[1,2,3,[4,5]];
const indexx0=arr[0];
const [index0,,index2,[nestedIndex0,nestedIndex1]]=arr;
console.log(nestedIndex0,nestedIndex1)


Swap:
Traditional way:
let a=1;
let b=2;
let temp;
temp=a;
a=b;
b=temp;

using destructuring:

let a=1
let b=2
b=4;
console.log(a,b);
[a,b]=[b,a];
console.log(a,b);

let obj={
  name:'cams',
  age:24,
  address:{
    street:'SR Nagar'
  }
}
const {name:myName,gender='Male',address:{street:myStreet}}=obj;
console.log(myStreet)
*/
// const myFun=(...myargs)=>{
//   console.log(myargs)
// }
// myFun(...[1,2,3])
// const arr=[1,2,3,4,5,6];

// const [index0,index1,...restIndexes]=arr;
// console.log(restIndexes)
// const str='Hello';
// const obj={name:'cams'}
// console.log(...obj)


// const obj = { a: 1, b: 2,c:{d:3} };
// const objCopy = { ...obj };
// objCopy['c']['d']=4
// console.log(objCopy.c,obj.c); // Output: { a: 1, b: 2 }

// const arr=[{name:'cams'},2];
// const [{name:myName},value]=arr;
// console.log(myName)
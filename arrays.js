/*array -
Arrays are ordered collections of values that can hold multiple items of any data type.
Arrays can be created using square brackets [] or the Array constructor.

let array1 = [1, 2, 3, 4];
let array2 = new Array(1, 2, 3, 4);

Basic Properties:

Length: The length of an array can be found using the .length property.

let array = [1, 2, 3, 4];
console.log(array.length); // Output: 4

Accessing Elements:

Indexing: Access elements using zero-based indexing.

let array = [1, 2, 3, 4];
console.log(array[0]); // Output: 1
console.log(array[3]); // Output: 4

Array Methods:

1)Adding and Removing Elements:
    push(): Adds one or more elements to the end of an array.
    The push() method returns the new array length:
    let array = [1, 2, 3];
    array.push(4); // array is now [1, 2, 3, 4]

    pop(): Removes the last element from an array and returns it.
    let array = [1, 2, 3, 4];
    let lastElement = array.pop(); // lastElement is 4, array is now [1, 2, 3]

    unshift(): Adds one or more elements to the beginning of an array.
    let array = [2, 3, 4];
    array.unshift(1); // array is now [1, 2, 3, 4]

    shift(): Removes the first element from an array and returns it.
    let array = [1, 2, 3, 4];
    let firstElement = array.shift(); // firstElement is 1, array is now [2, 3, 4]

2)Finding and Filtering Elements:
    indexOf(): Returns the first index at which a given element can be found.
    let array = [1, 2, 3, 4];
    let index = array.indexOf(3); // index is 2

    lastIndexOf(): Returns the last index at which a given element can be found.
    let array = [1, 2, 3, 4, 3];
    let index = array.lastIndexOf(3); // index is 4

    includes(): Determines whether an array contains a certain element.
    let array = [1, 2, 3, 4];
    let hasElement = array.includes(3); // hasElement is true

    find(): Returns the first element that satisfies a provided testing function.
    let array = [1, 2, 3, 4];
    let found = array.find(element => element > 2); // found is 3

    filter(): Creates a new array with all elements that pass the test implemented by the provided function.
    let array = [1, 2, 3, 4];
    let filtered = array.filter(element => element > 2); // filtered is [3, 4]

3)Transforming Arrays:
    map(): Creates a new array with the results of calling a provided function on every element.
    let array = [1, 2, 3, 4];
    let mapped = array.map(element => element * 2); // mapped is [2, 4, 6, 8]

    reduce(): Applies a function against an accumulator and each element in the array to reduce it to a single value.
    let array = [1, 2, 3, 4];
    let sum = array.reduce((acc, element) => acc + element, 0); // sum is 10

    forEach(): Executes a provided function once for each array element.
    let array = [1, 2, 3, 4];
    array.forEach((element,index,array) => console.log(element)); // Logs 1, 2, 3, 4

4)Manipulating Arrays:
    slice(): Returns a shallow copy of a portion of an array into a new array object.
    let array = [1, 2, 3, 4];
    let sliced = array.slice(1, 3); // sliced is [2, 3]

    splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
    spice(startingIndex, deleteCount,value1,value2)
    let array = [1, 2, 3, 4];
    let removed = array.splice(1, 2,'a'); // removed is [2, 3], array is now [1,'a', 4]

5)Combining and Flattening Arrays:
    concat(): Merges two or more arrays.
    let array1 = [1, 2];
    let array2 = [3, 4];
    let combined = array1.concat(array2); // combined is [1, 2, 3, 4]

    flat(): Creates a new array with all sub-array elements concatenated 
    into it recursively up to the specified depth.
    let array = [1, [2, [3, [4]]]];
    step1: [1,2,[3,[4]]]
    step2: [1,2,3,[4]]
    let flattened = array.flat(3); // flattened is [1, 2, 3, [4]]

6)Sorting and Reversing:
    sort(): Sorts the elements of an array in place and returns the sorted array.
    let array = [3, 1, 4, 2];
    array.sort(); // array is now [1, 2, 3, 4]  
    
    reverse(): Reverses an array in place. The first array element becomes the last, and the last becomes the first.
    let array = [1, 2, 3, 4];
    array.reverse(); // array is now [4, 3, 2, 1]
7)Joining:
    join(): Joins all elements of an array into a string.
    let array = [1, 2, 3, 4];
    let str = array.join('-'); // str is '1-2-3-4'


Examples used in class:

// console.log(Array.isArray({}))

// console.log(typeof {},typeof [])
//concat
// const arr3=arr1.concat([5,6,7]);
// console.log(arr1)
// console.log(arr3)

//join
// const number=123
// const jointArray=number.toString()
// console.log(arr1)
// console.log(jointArray)
// console.log(typeof arr1,typeof jointArray)
// const arr=[1,2,3];
// console.log(arr.join(''))

// push
// console.log(arr1.push(5));
// console.log(arr1.push(7))
// console.log(arr1)

// pop
// console.log(arr2.pop())
// console.log(arr1)

//shift
// console.log(arr2.shift());
// console.log(arr2)

//unshift
// arr2.unshift(0);
// console.log(arr2);

//splice
// arr1.splice(arr1.length,0,5);
// console.log(arr1)

//length
// console.log(arr1.length);

//Accessing values:
// console.log(arr1.length)
// console.log(arr1.slice(-1))

//indexOf
//lastIndexOf
// const arr3=[1,2,3,4]
// console.log(arr3.lastIndexOf(4))

//slice:

// const arr3=arr1.slice(1)
// console.log(arr3)

//splice
// arr1.splice(0,7,'name','','','','','','hello')
// console.log(arr1)

//map
The map method creates a new array populated with the results of calling a provided function on every element in the calling array.
array.map(callback(element, index, array));

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]

Use Case: Transforming each element in an array.

//forEach
The forEach method executes a provided function once for each array element. It does not return a new array.

const numbers = [1, 2, 3, 4];
numbers.forEach((num, index) => {
  console.log(`Index ${index}: ${num}`);
});
Use Case: Performing side effects (e.g., logging, modifying external variables).


//filter

The filter method creates a new array with all elements that pass the test implemented by the provided function.

array.filter(callback(element, index, array))

const numbers = [1, 2, 3, 4];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

Use Case: Filtering out elements based on a condition.

//find

The find method returns the first element in the provided array that satisfies the provided testing function.
If no values satisfy the testing function, undefined is returned.

array.find(callback(element, index, array))

const numbers = [1, 2, 3, 4];
const found = numbers.find(num => num > 2);
console.log(found); // 3

Use Case: Finding a single (first) element that meets a condition.

//reduce

The reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

array.reduce(callback(accumulator, currentValue, index, array), initialValue);

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10

Use Case: Aggregating array values into a single value (e.g., summing numbers, flattening arrays).
*/

//forEach:

// const arr=[1,2,3,4,5];
// const myCallback=(elem,index)=>{
//     console.log(`${elem} at ${index}`)
// }
// arr.forEach(myCallback)

//map:

// const arr=[1,2,3,4,5];
// const newArr=[]
// const myCallback=(elem,index)=>{
//     newArr.push(elem*2)
// }
// arr.forEach(myCallback)
// // const newArr=arr.map(myCallback)
// console.log(newArr)

//filter

// const arr=[11,2,22,1];
//negative -  a comes before b
//positive -  a comes after b;
// arr.sort((a, b) => {
//     return a-b
// });
// console.log(arr);
// const filteredArr=arr.filter((elem)=>{
//     if(elem!==2){
//         return elem
//     }
// })

// console.log(filteredArr)

//reduce

// const total=arr.reduce((prev,elem,index)=>{
//     if(index!==1){
//         return prev+elem
//     }
//     return 0
// },0)
// console.log(total)
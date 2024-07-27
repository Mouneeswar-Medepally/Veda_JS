/* 
Objects are collections of key-value pairs where the keys (also called properties) are strings (or Symbols) 
and the values can be any data type.
 
Creation: Objects can be created using object literals {} or the Object constructor
let obj1 = { key1: 'value1', key2: 'value2' };
let obj2 = new Object();
obj2.key1 = 'value1';
obj2.key2 = 'value2';

Basic Properties:
    Accessing Properties: Properties can be accessed using dot notation or bracket notation.
    let person = { name: 'Alice', age: 25 };
    console.log(person.name); // Output: Alice
    console.log(person['age']); // Output: 25

    Adding/Modifying Properties: Properties can be added or modified using dot or bracket notation.
    person.job = 'Engineer';
    person['city'] = 'New York';

    Deleting Properties: Properties can be deleted using the delete operator.
    delete person.age;

Object Methods:

1)Object Creation and Copying:
    Object.create(): Creates a new object with the specified prototype object and properties
    let prototypeObj = { greet: function() { console.log('Hello!'); } };
    let newObj = Object.create(prototypeObj);
    newObj.greet(); // Output: Hello!


    Object.assign(): Copies all enumerable own properties from one or more source objects to a target object.
    let target = { a: 1 };
    let source = { b: 2, c: 3 };
    Object.assign(target, source); // target is now { a: 1, b: 2, c: 3 }

2)Object Properties:
    Object.keys(): Returns an array of a given object's own enumerable property names.
    let person = { name: 'Alice', age: 25 };
    let keys = Object.keys(person); // keys is ['name', 'age']

    Object.values(): Returns an array of a given object's own enumerable property values.
    let person = { name: 'Alice', age: 25 };
    let values = Object.values(person); // values is ['Alice', 25]

    Object.entries(): Returns an array of a given object's own enumerable property [key, value] pairs.
    let person = { name: 'Alice', age: 25 };
    let entries = Object.entries(person); // entries is [['name', 'Alice'], ['age', 25]]

3)Checking Properties:
   hasOwnProperty(): Returns a boolean indicating whether the object has the specified property as its own property.
   let hasName = person.hasOwnProperty('name'); // true

   in Operator: Returns a boolean indicating whether the object has the specified property (either own or inherited).
   let hasName = 'name' in person; // true

Object.freeze(): Freezes an object, making it immutable. 
Once an object is frozen, you cannot add, delete, or modify its properties.

let obj = { prop: 1 };
Object.freeze(obj);

obj.prop = 2; // Attempt to modify (fails silently or throws an error in strict mode)
console.log(obj.prop); // Output: 1

obj.newProp = 3; // Attempt to add new property (fails silently or throws an error in strict mode)
console.log(obj.newProp); // Output: undefined

delete obj.prop; // Attempt to delete property (fails silently or throws an error in strict mode)
console.log(obj.prop); // Output: 1

Object.seal():

Seals an object, preventing new properties from being added and marking all existing properties as non-configurable. 
You can still modify the values of existing properties.

let obj = { prop: 1 };
Object.seal(obj);

obj.prop = 2; // Modify existing property
console.log(obj.prop); // Output: 2

obj.newProp = 3; // Attempt to add new property (fails silently or throws an error in strict mode)
console.log(obj.newProp); // Output: undefined

delete obj.prop; // Attempt to delete property (fails silently or throws an error in strict mode)
console.log(obj.prop); // Output: 2

Object.isFrozen():
Checks if an object is frozen.
let obj = { prop: 1 };
Object.freeze(obj);

let isFrozen = Object.isFrozen(obj);
console.log(isFrozen); // Output: true

let notFrozenObj = { prop: 1 };
let isNotFrozen = Object.isFrozen(notFrozenObj);
console.log(isNotFrozen); // Output: false

Object.isSealed():
Checks if an object is sealed.
let obj = { prop: 1 };
Object.seal(obj);

let isSealed = Object.isSealed(obj);
console.log(isSealed); // Output: true

let notSealedObj = { prop: 1 };
let isNotSealed = Object.isSealed(notSealedObj);
console.log(isNotSealed); // Output: false
Note: A frozen object is also a sealed object


Examples used in class:
const a={
//     name: 'cams'
// }
// let a =4;
// let b= a;
// a=5
// console.log(a,b) 
// a.name='mani'
// a={age:24}
// function newObject(){
//     this.name='cams'
// }
// const c=Object.create(null)
// const myObj=new Object();


///assign

const new1={
    name:'hari'
}
const new2=Object.assign(new1,{age:24});
// new2.gender='male'
// console.log(new1,new2)


//keys

// const myKeys=Object.keys({})
// console.log(myKeys)

//values

// const myValues=Object.values(new2)
// console.log(myValues)

//entries 

// const myEntries=Object.entries(new2);
// console.log(myEntries);

//hasOwnProperty

// console.log(new2.hasOwnProperty('age'))

//freeze

// Object.freeze(new2)
// new1.age=25
// new1.gender='male'
// console.log(new1,new2)

//seal 

Object.seal(new2);
new1.age=25
new1.gender='male'
// console.log(new1,new2)


console.log(Object.isSealed(new2),Object.isFrozen(new2))

*/
// obja ----> 0004 ---> 0003
// objb ----> 0004 ---> 0005 

//heapstack - 
// 0005 -->{
//     name:'hari'
// }
// const obja = {
//     name:'cams'
// }
// let objb= obja;
// objb={
//     name:'hari'
// }
// console.log(obja,objb)
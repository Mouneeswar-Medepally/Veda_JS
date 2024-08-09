// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }

//     greet() {
//       console.log(`Hello, my name is ${this.name}`);
//     }
//   }

//   const person1 = new Person('Alice', 30);
//   console.log(person1.greet)
//   person1.greet();




// const myObj={
//     'name':'ALice'
// }  

// console.log(myObj.hasOwnProperty('age'))

// function Person(name,age){
//     this.name=name;
//     this.age=age
// }

// Person.prototype.greet = function() {
//     console.log(`Hello, my name is ${this.name}`);
// };
// const alice=new Person('Alice',30);
// const john=new Person('John',24)
// alice.greet()
// // console.log(alice.__proto__)
// // console.log(john.__proto__)

// const p=document.querySelector('p');

// const myObj={
//     'name':'ALice'
// } 
// console.log(myObj.__proto__)

// class Animal {
//     constructor(name) {
//       this.name = name;
//     }

//     speak() {
//       console.log(`${this.name} makes a noise`);
//     }
//   }

//   class Dog extends Animal {
//     constructor(name, breed) {
//       super(name);
//       this.breed = breed;
//     }
//     speak() {
//       console.log(`${this.name} barks`);
//     }
//   }

//   const dog = new Dog('Rex', 'German Shepherd');
//   console.log(dog);
//   console.log(dog.__proto__)
//   console.log(dog.speak('dog'))
//   dog.speak(); 

// function main(){
//     function myFunc(){
//         console.log(this)
//     }
//     const myArrowFunc=()=>{
//         console.log(this)
//     }
//     myFunc()
//     myArrowFunc()
// }
// const obj={
//     greet:function(){
//         console.log(this)
//     }
// }

// const obj1={
//     greet:()=>{
//         console.log(this)
//     }
// }
// obj.greet()
// obj1.greet()

// Object.keys(obj)
// class MathUtil {
//     static square(number) {
//         return number * number;
//     }
// }
// console.log(MathUtil.square(4));

// function Counter() {
//     let count = 0;
  
//     this.increment = function () {
//       count += 1;
//       console.log(count);
//     };
  
//     this.decrement = function () {
//       count -= 1;
//       console.log(count);
//     };
//   }
  
//   const counter = new Counter();
//   console.log(counter.count)
//   counter.increment(); // Output: 1
//   counter.decrement(); // Output: 0

// class Counter {
//     #count = 0; // Private variable
  
//     #log() { // Private method
//       console.log('Count:', this._count);
//     }
  
    // increment() {
    //   this.#count += 1;
    //   this.#log();
    // }
  
    // decrement() {
    //   this.#count -= 1;
    //   this.#log();
    // }
//   }
  
//   const counter = new Counter();
//   console.log(counter._count)
//   counter.increment(); // Output: Count: 1
//   counter.decrement(); // Output: Count: 0

// const obj={
//    name:'cams'
// }
// function greet(...args){
//     console.log(this)
// }
// greet.call(obj,23,'Hyderabad')
// greet.apply(obj,[23,'Hyderabad'])
// const boundFunction=greet.bind(obj)
// boundFunction()

// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }

//     greet() {
//       console.log(`Hello, my name is ${this.name}`);
//     }
//   }

//   const person1 = new Person('Alice', 30);
//   console.log(person1.greet)
//   person1.greet();


class Person {
    constructor(name, age) {
      this._name = name;
      this._age = age; // The underscore indicates a "private" field (by convention)
    }
  
    // Getter for name
    get name() {
      return this._name;
    }
  
    // Setter for name
    set name(newName) {
        this._name = newName;
    }
  
    // Getter for age
    get age() {
      return this._age;
    }
  
    // Setter for age
    set age(newAge) {
        this._age = newAge;
    }
  }
  
  const person = new Person('Alice', 25);
  
  console.log(person.name); // Getter is called, Output: "Alice"
  person.name = 'Bob';      // Setter is called, changes _name to "Bob"
  console.log(person.name); // Getter is called, Output: "Bob"
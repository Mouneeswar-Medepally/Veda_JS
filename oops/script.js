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

class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise`);
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }
    speak() {
      console.log(`${this.name} barks`);
    }
  }
  
  const dog = new Dog('Rex', 'German Shepherd');
  console.log(dog);
//   console.log(dog.__proto__)
//   console.log(dog.speak('dog'))
  dog.speak(); 


// var, let, const
// var name = "John Doe";
// console.log(name);
// name = "Steve Smith";
// console.log(name);

// // Init var
// var greeting;
// console.log(greeting);
// greeting = "Hello";
// console.log(greeting);

// // letters, numbers, _, $ -> Only characters that can make up a variable name
// // Cannot start with a number
// // var 1name = "John"; -> not valid
// var $name = "John"; // valid
// var _name = "John"; // valid

// // Multi word vars
// var firstName = 'John'; // Camel case -> Convention used throughout the course
// var first_name = 'Sara'; // Underscore
// var FirstName = 'Tom'; // Pascal case
// var firstname; // Not recommended

// LET
// let name;
// name = "John Doe";
// console.log(name);
// name = "Steve Smith";
// console.log(name);

// CONST
// const name = "John";
// console.log(name);
// Can not reassign
// name = "Sara";
// Have to assign a value
// const greeting;

const person = {
  name: "John",
  age: 30,
};

person.name = "Sara";
person.age = 32;

// console.log(person);

const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
// numbers = [1, 2, 3, 4, 5, 6]; // Produces an error because you cannot overwrite an const instance

console.log(numbers);

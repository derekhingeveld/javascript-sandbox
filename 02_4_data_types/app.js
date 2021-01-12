/*
Primitive Data Types vs. Reference Types

Primitive Data Types:
Stored directly in the location the variable accesses
Stored on the stack

Reference Data Types:
Accessed by reference
Objects that are stored on the heap
A pointer to a location in memory

Primitive Data Types
String
Number
Boolean
Null
Undefined
Symbols (ES6)

Reference Data Types / Objects
Arrays
Object Literals
Functions
Dates
Anything Else...

Dynamically Type Language
Types are associated with values not variables
The same variable can hold multiple types
We do not need to specify types
Most other languages are statically types (Java, C#, C++)
There are supersets of JS and addons to allow static typing (TypeScript, Flow)
*/

// PRIMITIVE TYPES

// String
const name = "John Doe";
// Number
const age = 45;
// Boolean
const hasKids = true;
// Null
const car = null;
// Undefined
let test;
// Symbol
const sym = Symbol();

// REFERENCE TYPES - Objects

// Array
const hobbies = ["movies", "music"];
// Object literal
const address = {
  city: "Boston",
  state: "MA",
};
const today = new Date();
console.log(today);
console.log(typeof today);

/* jshint esversion: 6 */

// MODULE WRAPPER FUNCTION THAT IS WRAPPED AROUND OUR JS CODE
// (function (exports, require, module, __filename, __dirname) {
//
// })

// console.log(__dirname, __filename)

// const person = {
//   name: 'John Doe',
//   age: 30
// };

// CREATE A CLASS OBJECT
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`My name is ${this.name} and I am ${this.age}`);
  }
}
// To Use the Module someplace else in the application
module.exports = Person;

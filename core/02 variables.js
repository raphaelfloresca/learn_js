// var, let and const are three ways of setting variables, don't use var, only let and consst
// var is globally scoped, let and const are block scoped

// let can be reassigned
let age = 30;
age = 31;

console.log(age);

// const cannot be reassigned
// const anotherAge = 40;
// anotherAge = 41; // this will throw an error

// const unassignedAge; // this will throw an error

// General rule: always use const unless you know you will reassign a variable